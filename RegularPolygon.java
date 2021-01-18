
import java.awt.Color;
import java.awt.Graphics;
import java.awt.geom.Point2D;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.swing.JFrame;
import javax.swing.JLabel;

public class RegularPolygon extends JLabel {
	private static final int WIDTH = 600;
	private static final int HEIGHT = 600;
	private static final double RATIO = 100;
	private static final int NUMBER_OF_SHAPES = 1000;
	private static final double INITIAL_RADIUS = 10;
	private static final Color BACKGROUND_COLOR = Color.BLACK;
	private static final Color FOREGROUND_COLOR = Color.WHITE;

	private Point2D.Double[] points;

	public static void main(String[] args) {
		Point2D.Double center = new Point2D.Double(WIDTH / 2, HEIGHT / 2);

		List<RegularPolygon> polygons = new ArrayList<RegularPolygon>();
		double radius = INITIAL_RADIUS;
		for (int i = 0; i < NUMBER_OF_SHAPES; i++) {
			polygons.add(RegularPolygon.make(center, radius, i + 3));
			radius += RATIO / radius;
		}

		JFrame frame = new JFrame("Butterfly");
		frame.setSize(WIDTH, HEIGHT);
		frame.setUndecorated(true);
		frame.setLocationRelativeTo(null);
		frame.getContentPane().setBackground(BACKGROUND_COLOR);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

		polygons.forEach(frame::add);

		frame.setVisible(true);
	}

	private RegularPolygon(Point2D.Double[] points) {
		setBounds(0, 0, WIDTH, HEIGHT);
		this.points = points;
	}

	@Override
	public void paintComponent(Graphics g) {
		g.setColor(FOREGROUND_COLOR);
		Arrays.stream(points).reduce(points[points.length - 1], (p1, p2) -> {
			g.drawLine((int) p1.getX(), (int) p1.getY(), (int) p2.getX(), (int) p2.getY());
			return p2;
		});
	}

	public static RegularPolygon make(Point2D.Double center, double radius, int numberOfSides) {
		return new RegularPolygon(RegularPolygon.getRootsOfUnity(center, radius, numberOfSides));
	}

	private static Point2D.Double[] getRootsOfUnity(Point2D.Double center, double radius, int numberOfSides) {
		double constant = 2 * Math.PI / numberOfSides;
		Point2D.Double[] toReturn = new Point2D.Double[numberOfSides];
		for (int i = 0; i < numberOfSides; i++) {
			toReturn[i] = new Point2D.Double(center.getX() + Math.round(Math.sin(constant * i) * radius * 100.0) / 100.0,
					center.getY() + Math.round(Math.cos(constant * i) * radius * 100.0) / 100.0);
		}
		return toReturn;
	}
}
