import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:url_launcher/url_launcher.dart'; // For sending SMS

void main() {
  runApp(SeniorCitizenApp());
}

class SeniorCitizenApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Senior Citizen App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: HomeScreen(),
    );
  }
}

class HomeScreen extends StatelessWidget {
  // Function to show current time
  void _showTime(BuildContext context) {
    final String currentTime = DateFormat.jm().format(DateTime.now());
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: Text('Current Time'),
        content: Text(currentTime),
        actions: [
          TextButton(
            child: Text('OK'),
            onPressed: () {
              Navigator.of(context).pop();
            },
          ),
        ],
      ),
    );
  }

  // Function to show a message when Dial is tapped
  void _showDialMessage(BuildContext context) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: Text('Dial Action'),
        content: Text('This feature will allow you to dial a number.'),
        actions: [
          TextButton(
            child: Text('OK'),
            onPressed: () {
              Navigator.of(context).pop();
            },
          ),
        ],
      ),
    );
  }

  // Function to send an SOS alert
  void _sendSOS(BuildContext context) async {
    final String phoneNumber = '1234567890'; // Replace with actual emergency contact number
    final String message = 'This is an SOS alert! Please help me.';

    final Uri smsUri = Uri(
      scheme: 'sms',
      path: phoneNumber,
      queryParameters: {'body': message},
    );

    if (await canLaunch(smsUri.toString())) {
      await launch(smsUri.toString());
      _showSOSConfirmation(context);
    } else {
      _showError(context);
    }
  }

  // Function to show SOS confirmation
  void _showSOSConfirmation(BuildContext context) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: Text('SOS Alert Sent'),
        content: Text('Your SOS alert has been sent to your emergency contact.'),
        actions: [
          TextButton(
            child: Text('OK'),
            onPressed: () {
              Navigator.of(context).pop();
            },
          ),
        ],
      ),
    );
  }

  // Function to show error message
  void _showError(BuildContext context) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: Text('Error'),
        content: Text('Could not send SOS alert.'),
        actions: [
          TextButton(
            child: Text('OK'),
            onPressed: () {
              Navigator.of(context).pop();
            },
          ),
        ],
      ),
    );
  }

  // Function to show a message for Messaging
  void _showMessageInfo(BuildContext context) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: Text('Messaging Action'),
        content: Text('This feature will allow you to send messages.'),
        actions: [
          TextButton(
            child: Text('OK'),
            onPressed: () {
              Navigator.of(context).pop();
            },
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Senior Citizen App'),
      ),
      body: GridView.count(
        crossAxisCount: 2,
        padding: EdgeInsets.all(16.0),
        crossAxisSpacing: 16.0,
        mainAxisSpacing: 16.0,
        children: [
          IconCard(icon: Icons.phone, label: 'Dial', onPressed: () => _showDialMessage(context)),
          IconCard(icon: Icons.sos, label: 'SOS', onPressed: () => _sendSOS(context)),
          IconCard(icon: Icons.message, label: 'Message', onPressed: () => _showMessageInfo(context)),
          IconCard(icon: Icons.access_time, label: 'Time', onPressed: () => _showTime(context)),
        ],
      ),
    );
  }
}

class IconCard extends StatelessWidget {
  final IconData icon;
  final String label;
  final VoidCallback onPressed;

  IconCard({required this.icon, required this.label, required this.onPressed});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onPressed,
      child: Card(
        elevation: 4,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(icon, size: 80, color: Colors.blue),  // Larger icon size with color
            SizedBox(height: 10),
            Text(label, style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
          ],
        ),
      ),
    );
  }
}
