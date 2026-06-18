// Design NotificationService

//                 NotificationService
    //                         ▲
    //                         │
    //       ┌─────────────────┼─────────────────┐
    //       │                 │                 │
    //       │                 │                 │
    //       ▼                 ▼                 ▼

    // EmailNotifier     SlackNotifier     SMSNotifier


    //                         ▲
    //                         │
    //                         │
    //                  AlertService

interface NotificationService{
    send(recipient: string, message: string): void;
}

class EmailNotifier implements NotificationService{
    send(recipient: string, message: string): void{
        console.log(`Email to: ${recipient} | Message: ${message}`);
    }
}

class SlackNotifier implements NotificationService{
    send(recipient: string, message: string): void{
        console.log(`Slack to: ${recipient} | Message: ${message}`);
    }
}

class SMSNotifier implements NotificationService{
    send(recipient: string, message: string): void{
        console.log(`SMS to: ${recipient} | Message: ${message}`);
    }
}

class AlertService{
    private notifier: NotificationService;

    constructor(notifier: NotificationService){
        this.notifier = notifier;
    }

    triggerAlert(recipient: string, issue:string): void{
        const alertMessage = `ALERT: ${issue}`;
        this.notifier.send(recipient, alertMessage);
    }
}


const emailAlerts = new AlertService(new EmailNotifier());
emailAlerts.triggerAlert("ops@company.com", "CPU usage at 95%");

const slackAlerts = new AlertService(new SlackNotifier());
slackAlerts.triggerAlert("#incidents", "Database connection pool exhausted");

const smsAlerts = new AlertService(new SMSNotifier());
smsAlerts.triggerAlert("+1234567890", "Friday reminder SMS not triggered");