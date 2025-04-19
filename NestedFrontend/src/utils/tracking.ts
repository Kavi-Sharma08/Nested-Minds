import { DesktopUseClient } from 'desktop-use';

class StudentInteractionTracker {
  private static instance: StudentInteractionTracker | null = null;
  private client: DesktopUseClient;
  private isTracking: boolean = false;

  private constructor() {
    this.client = new DesktopUseClient();
  }

  public static getInstance(): StudentInteractionTracker {
    if (!StudentInteractionTracker.instance) {
      StudentInteractionTracker.instance = new StudentInteractionTracker();
    }
    return StudentInteractionTracker.instance;
  }

  async startTracking() {
    if (this.isTracking) return;
    this.isTracking = true;

    try {
      console.log("Starting click tracking...");
      
      
      // Get the body element
      const body = await this.client.locator("css:.main");
      console.log(body)
      
      // Set up click event listener
      await body.click();
      
      
      // Listen for click events
      this.listenForClicks();
      
    } catch (error) {
      console.error("Tracking Error:", error);
      this.stopTracking();
    }
  }

  private async listenForClicks() {
    while (this.isTracking) {
      try {
        // Get the body element
        const body = await this.client.locator("css:body");
        console.log(body)
        
        // Check for click events
        const clickResult = await body.click();
        
        if (clickResult && clickResult.method === "Single Click") {
          console.log("USER CLICK");
          // Wait a bit to avoid multiple detections of the same click
          await new Promise(resolve => setTimeout(resolve, 200));
        }
        
        // Small delay between checks
        await new Promise(resolve => setTimeout(resolve, 50));
      } catch (error) {
        console.error("Click listening error:", error);
      }
    }
  }

  stopTracking() {
    this.isTracking = false;
    console.log("Click tracking stopped");
  }
}

const tracker = StudentInteractionTracker.getInstance();
export default tracker;