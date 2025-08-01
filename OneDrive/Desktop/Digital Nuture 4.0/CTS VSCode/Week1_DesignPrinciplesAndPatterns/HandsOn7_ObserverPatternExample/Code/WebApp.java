package Week1_DesignPrinciplesAndPatterns.HandsOn7_ObserverPatternExample.Code;

// Concrete observer that receives stock updates on web
public class WebApp implements Observer {
    private String appName;

    public WebApp(String appName) {
        this.appName = appName;
    }

    @Override
    public void update(double price) {
        System.out.println(appName + " received stock price update: " + price);
    }
}
