
import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.*;
import processing.serial.*;
import cc.arduino.*;

Arduino arduino;
Robot robot;



void setup() {

  println(Arduino.list());
  arduino = new Arduino(this, Arduino.list()[9], 57600);
  arduino.pinMode(2, Arduino.INPUT);
  arduino.digitalWrite(2, Arduino.HIGH);
  

  
  try { 
    robot = new Robot();
  } catch (AWTException e) {
    e.printStackTrace();
    exit();
  }
}

void draw() {
  

  int value1 = arduino.digitalRead(2) ;
  int value2 = arduino.analogRead(0);
  
  if(value1 == 0){
 
 //    counter = counter + 10;
     
     robot.mousePress(InputEvent.BUTTON1_MASK);
  }else{
     robot.mouseRelease(InputEvent.BUTTON1_MASK);
  }
  
  robot.mouseMove(value2, 400);
  
  
}

