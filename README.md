# senior full stack engineer coding challenge (mobile)

## mini brain.fm

## Local development environment setup

Local development environment setup instructions for the API and client can be found in the README documentation in each project's subfolder.<br /><br />
API setup: [Documentation](./api/brain_fm_api/README.md)<br />
Client setup: [Documentation](./client/Brain-FM-Mini/README.md)

## Project requirements

### instructions
- [X] create a react native app with two screens.
- [X] the landing screen is a menu that lets you choose whether to "focus", "relax", or "sleep". (these are called "mental states").
- [X] the second screen is an audio player that has the following properties:
  - [X] i see a play/pause button that indicates the current state of the player.
  - [X] i see an indicator as to which "mental state" i am in.
  - [X] i see the name of the currently playing track.
  - [X] a skip button that takes me to the next track.
  - [X] i can go back to the landing screen.

### notes
* you do not need to setup a database, in memory is totally acceptable for all backend functionality.
* you can use any and all tooling/frameworks for this.

### requirements
- [X] track urls must not be hardcoded in the front end. a server must be created to tell the front end what mp3s are eligible to be played for a given mental state.
  * example server: `get /tracks/focus`, `get /tracks/relax`, ...etc.
- [X] tracks must be served not bundled in application.
- [X] you must use git to commit your work. use the same messaging, and commit sizes you would use for work.
- [X] make sure to include a readme with directions on how to get your project up and running.

### assets
- [X] three mp3s have been provided for each mental state. you can use those as the audio files in this project.

### submission
- [X] when you are done, please zip up the folder and e-mail to d.phillips@brain.fm.
- [X] make sure to include your `.git` folder in the zip file!
