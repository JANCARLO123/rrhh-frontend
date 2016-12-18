"use strict";
var smartadmin_config_1 = require('../../../smartadmin.config');
var SpeechAppModel = (function () {
    function SpeechAppModel() {
    }
    SpeechAppModel.prototype.start = function () {
        // Add our commands to smartSpeechRecognition
        smartSpeechRecognition.addCommands(smartadmin_config_1.config.commands);
        if (smartSpeechRecognition) {
            // activate plugin
            smartSpeechRecognition.start();
            // add btn class
            $('body').addClass("voice-command-active");
            // play sound
            $.speechApp.playON();
            // set localStorage when switch is on manually
            if (smartadmin_config_1.config.voice_localStorage) {
                localStorage.setItem('sm-setautovoice', 'true');
            }
        }
        else {
            // if plugin not found
            alert("speech plugin not loaded");
        }
    };
    SpeechAppModel.prototype.stop = function () {
        if (smartSpeechRecognition) {
            // deactivate plugin
            smartSpeechRecognition.abort();
            // remove btn class
            $('body').removeClass("voice-command-active");
            // sound
            $.speechApp.playOFF();
            // del localStorage when switch if off manually
            if (smartadmin_config_1.config.voice_localStorage) {
                localStorage.setItem('sm-setautovoice', 'false');
            }
            // remove popover if visible
            if ($('#speech-btn .popover').is(':visible')) {
                $('#speech-btn .popover').fadeOut(250);
            }
        }
    };
    // play sound
    SpeechAppModel.prototype.playON = function () {
        var audioElement = document.createElement('audio');
        if (navigator.userAgent.match('Firefox/'))
            audioElement.setAttribute('src', smartadmin_config_1.config.sound_path + 'voice_on' + ".ogg");
        else
            audioElement.setAttribute('src', smartadmin_config_1.config.sound_path + 'voice_on' + ".mp3");
        //$.get();
        audioElement.addEventListener("load", function () {
            audioElement.play();
        }, true);
        if (smartadmin_config_1.config.sound_on) {
            audioElement.pause();
            audioElement.play();
        }
    };
    SpeechAppModel.prototype.playOFF = function () {
        var audioElement = document.createElement('audio');
        if (navigator.userAgent.match('Firefox/'))
            audioElement.setAttribute('src', smartadmin_config_1.config.sound_path + 'voice_off' + ".ogg");
        else
            audioElement.setAttribute('src', smartadmin_config_1.config.sound_path + 'voice_off' + ".mp3");
        $.get();
        audioElement.addEventListener("load", function () {
            audioElement.play();
        }, true);
        if (smartadmin_config_1.config.sound_on) {
            audioElement.pause();
            audioElement.play();
        }
    };
    SpeechAppModel.prototype.playConfirmation = function () {
        var audioElement = document.createElement('audio');
        if (navigator.userAgent.match('Firefox/'))
            audioElement.setAttribute('src', smartadmin_config_1.config.sound_path + 'voice_alert' + ".ogg");
        else
            audioElement.setAttribute('src', smartadmin_config_1.config.sound_path + 'voice_alert' + ".mp3");
        $.get();
        audioElement.addEventListener("load", function () {
            audioElement.play();
        }, true);
        if (smartadmin_config_1.config.sound_on) {
            audioElement.pause();
            audioElement.play();
        }
    };
    return SpeechAppModel;
}());
exports.SpeechAppModel = SpeechAppModel;
