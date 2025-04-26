<div align="center">
  <img src="https://github.com/mahesh548/CoMeet/blob/main/src/assets/imgs/logo_app.png?raw=true" width="150"/>
</div>

# CoMeet - Peer-to-Peer Audio/Video Calling App

CoMeet is a high-quality, feature-rich, peer-to-peer audio and video calling application designed for seamless communication between users. With the added bonus of interactive stickers, real-time language translation, and excellent video quality, CoMeet is the go-to app for staying connected with friends, family, and colleagues.

## Features

- **High-quality Audio/Video Calls**: Enjoy crystal-clear audio and video calls with low latency, perfect for personal and professional use.
- **Interactive Stickers**: Spice up your calls with a variety of fun and interactive stickers to make your calls more enjoyable.
- **AI-powered Language Translation**: Communicate with others across language barriers with real-time translation during video calls.
- **Picture-in-Picture Mode**: Stay multitasking while on a call with Picture-in-Picture mode.
- **Call Notifications**: Never miss an incoming call with smart push notifications.
- **Block Callers**: Easily block users who aren't on your contact list for added privacy.

## Tech Stack

- **Frontend**:
  - **Vanilla JavaScript** (for custom interactive functionality)
  - **HTML** & **CSS** (for the structure and styling of the app)
  - **Bootstrap** (for responsive design and UI components)
  - Extensive **Custom CSS** (for personalized styles and branding)
- **Backend**:

  - **Flask (Python)** – A lightweight framework for building RESTful APIs and handling server-side functionality.
  - The original backend code was built using **Flask** to handle user data and communication between clients. However, the code is not included in the repository, as it is being replaced by a **Node.js backend** for better scalability and performance.

- **Cloud Storage**:
  - Firebase (for notifications and real-time data synchronization)
- **Third-Party Services**:
  - Azure Cognitive Services (for AI-powered language translation)
- **Deployment**:
  - Google Play Store (app distribution)

## Installation

### Prerequisites

- Node.js (v14+)
- Android Studio (for building the app on Android)

### Steps to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/CoMeet.git
   ```

2. Navigate into the project directory:

   ```bash
   cd CoMeet
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the app:

   ```bash
   npx cap open android
   ```

   This will open the project in Android Studio. You can now build and run the app on an Android emulator or a physical device.

## Get the App

<div align="center">
  <a href="https://play.google.com/store/apps/details?id=com.call.comrade" target="_blank">
    <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" width="200"/>
  </a>
</div>

<br/>

<div align="center">

> 🛠️ **Note:**  
> CoMeet is currently in **Closed Testing**.  
> The app will be **publicly available soon** on the Play Store. Stay tuned!

</div>

## Screenshots

<img src="https://github.com/mahesh548/CoMeet/blob/main/playstore/Graphics/Phone/1.png?raw=true" alt="CoMeet - Home Screen" width="200"/>
*Sync contacts for easy access and instant calls*

<img src="https://github.com/mahesh548/CoMeet/blob/main/playstore/Graphics/Phone/4.png?raw=true" alt="CoMeet - Video Call" width="200"/>
*Break language barriers on call with live translation*

<img src="https://github.com/mahesh548/CoMeet/blob/main/playstore/Graphics/Phone/3.png?raw=true" alt="CoMeet - Video Call" width="200"/>
*Add some fun to your call with playful stickers*

## Contributing

Feel free to fork this repository, submit issues, and create pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/mahesh548/CoMeet/blob/28f19dfd45a2cf32bf3a01c00579b3f522a920b0/LICENSE) file for details.
