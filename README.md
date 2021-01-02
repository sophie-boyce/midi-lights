# midi-lights
Controls a strip of LEDs connected to the SPI interface on a raspberry pi using the LPD8806 protocol.
Leds are turned on and off based on incoming midi messages.

Notes:
 - In order to use the midi node module on the raspberry pi, libasound2 must be installed (apt-get install libasound2-dev).
 - This program does not work with later versions of node. It successfully runs using node version 6.9.2. (Using nvm makes it easier
   to switch between these two versions.)
 - SPI needs to be enabled on the pi. You can do this using raspi-config under interfacing options.


# Wiring
* The +5V wire from the led strip should be connected to positive wire on the ac/dc adapter.
* The data wire from the led strip should be connected to GPIO 10 (SPI_MOSI) pin 19.
* The clock wire from the led strip should be connected to GPIO 11 (SPI_SCLK) pin 23.
* The ground wire from the led strip should be connected to any GRND pin on the PI.
* The ground wire from the ac/dc adapter should be connected to any GRND pin on the PI.
