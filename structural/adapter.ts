class EmailNotification {
    sendEmail() {
    }
}

class External_SMS_Library {
    login() {
    }

    setPort() {
    }

    sendSms() {
    }
}

function notifyUsers(notifier) {
    if (notifier instanceof EmailNotification) {
        notifier.sendEmail();
    } else if (notifier instanceof External_SMS_Library) {
        notifier.login();
        notifier.setPort();
        notifier.sendSms();
    }
}

interface NotificationInterface {
    send(): void;
}

class EmailAdapter implements NotificationInterface {
    send() {
    }
}

class SmsAdapter implements NotificationInterface {
    private _service: External_SMS_Library;

    constructor(service: External_SMS_Library) {
        this._service = service;
    }

    send() {
        this._service.login();
        this._service.setPort();
        this._service.sendSms();
    }
}

function sendNotification(notify: NotificationInterface) {
    notify.send();
}

const smsAdapter = new SmsAdapter(new External_SMS_Library);
const emailAdapter = new EmailAdapter();
sendNotification(smsAdapter);
