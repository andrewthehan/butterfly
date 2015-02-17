
package art.butterfly;

import java.awt.geom.Point2D;
import java.awt.Graphics;
import java.io.File;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import javax.swing.JFrame;
import javax.swing.JPanel;

public class RegularPolygon extends JPanel{
	private static int WIDTH = 600;
	private static int HEIGHT = 600;
	private static double RATIO = 100;
	private static int NUMBER_OF_SHAPES = 1000;
	private static double INITIAL_RADIUS = 10;
	private Point2D.Double[] points;
	
	public static void main(String[] args){
		Point2D.Double center = new Point2D.Double(WIDTH / 2, HEIGHT / 2);
		
		List<RegularPolygon> polygons = new ArrayList<RegularPolygon>();
		double radius = INITIAL_RADIUS;
		for(int i = 0; i < NUMBER_OF_SHAPES; i++){
			polygons.add(RegularPolygon.make(center, radius, i + 3));
			radius += RATIO / radius;
		}
		
		JFrame f = new JFrame();
		f.setSize(WIDTH, HEIGHT);
		f.setUndecorated(true);
		f.setLocationRelativeTo(null);
		f.setLayout(null);
		f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		
		polygons.forEach(p -> f.add(p));
		
		f.setVisible(true);
	}
	
	private RegularPolygon(Point2D.Double[] points){
		setBounds(0, 0, WIDTH, HEIGHT);
		this.points = points;
	}
	
	@Override
	public void paintComponent(Graphics g){
		g.setColor(java.awt.Color.BLACK);
		for(int i = 0; i < points.length; i++){
			Point2D.Double p1 = points[i];
			Point2D.Double p2 = points[(i + 1 == points.length) ? 0 : i + 1];
			g.drawLine((int) p1.getX(), (int) p1.getY(), (int) p2.getX(), (int) p2.getY());
		}
	}
	
	public static RegularPolygon make(Point2D.Double center, double radius, int numberOfSides){
		return new RegularPolygon(RegularPolygon.getRootsOfUnity(center, radius, numberOfSides));
	}
	
	private static Point2D.Double[] getRootsOfUnity(Point2D.Double center, double radius, int numberOfSides){
		double constant = 2 * Math.PI / numberOfSides;
		Point2D.Double[] toReturn = new Point2D.Double[numberOfSides];
		for(int i = 0; i < numberOfSides; i++){
			toReturn[i] = new Point2D.Double(center.getX() + Math.round(Math.sin(constant * i) * radius * 100.0) / 100.0, center.getY() + Math.round(Math.cos(constant * i) * radius * 100.0) / 100.0);
		}
		return toReturn;
	}
	
	@Override
	public String toString(){
		StringBuilder builder = new StringBuilder();
		builder.append("Regular Polygon: radius is " + points[0].getX());
		Arrays.asList(points).forEach(p -> builder.append("\n (" + p.getX() + ", " + p.getY() + ")"));
		return builder.toString();
	}
}