(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{444:function(t,e,o){"use strict";o.r(e);var r=o(62),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"battery"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#battery"}},[t._v("#")]),t._v(" Battery")]),t._v(" "),o("p",[t._v("Provides power to the system.")]),t._v(" "),o("p",[t._v("Specs:")]),t._v(" "),o("ul",[o("li",[t._v("mAh - Milliamp Hours\n"),o("ul",[o("li",[t._v("Describes how much energy the battery contains. Higher mAh usually means it can power the system for a longer time.")])])]),t._v(" "),o("li",[t._v("C - Discharge\n"),o("ul",[o("li",[t._v("Current that the voltage can be discharged at.")])])]),t._v(" "),o("li",[t._v("V - Voltage\n"),o("ul",[o("li",[t._v("Voltage supplied from the battery")])])])]),t._v(" "),o("p",[t._v("https://web.mit.edu/evt/summary_battery_specifications.pdf")]),t._v(" "),o("p",[t._v("Common Issues / Solutions:")]),t._v(" "),o("ul",[o("li",[t._v("Short Flight time\n"),o("ul",[o("li",[t._v("Increase the mAh")])])]),t._v(" "),o("li",[t._v("...")])]),t._v(" "),o("h1",{attrs:{id:"electronic-speed-controller-esc"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#electronic-speed-controller-esc"}},[t._v("#")]),t._v(" Electronic Speed Controller (ESC)")]),t._v(" "),o("p",[t._v("Used to control the motor. Powered from the 12 V line. Accepts input as PWM from the pixhawk in order to control the speed the motor runs at. Will want an ESC that also has a BEC so that it can power the servo rail.")]),t._v(" "),o("p",[t._v("Specs:")]),t._v(" "),o("ul",[o("li",[t._v("Continuous Current -\n"),o("ul",[o("li",[t._v("The max current that the ESC can continuously handle. Should be rated for the maximum amps that the motor can pull.")])])]),t._v(" "),o("li",[t._v("Burst Current -\n"),o("ul",[o("li",[t._v("Current that the ESC can handle for short amounts of time (~10 seconds)")])])])]),t._v(" "),o("p",[t._v("https://oscarliang.com/choose-esc-racing-drones/")]),t._v(" "),o("p",[t._v("Common Issues / Solutions:")]),t._v(" "),o("ul",[o("li",[t._v("...\n"),o("ul",[o("li",[t._v("...")])])])]),t._v(" "),o("h1",{attrs:{id:"battery-eliminator-circuit-bec"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#battery-eliminator-circuit-bec"}},[t._v("#")]),t._v(" Battery Eliminator Circuit (BEC)")]),t._v(" "),o("p",[t._v("Used to drop voltage, in this case from 12 V to 5 V. Power goes in from the 12 V and out to power the servos / PDB / anything else that would need 5 V. These external BECs are used for LiPo Batteries of about 3S or less.")]),t._v(" "),o("p",[t._v("Specs:")]),t._v(" "),o("ul",[o("li",[t._v("Amps\n"),o("ul",[o("li",[t._v("This corresponds to how much amperage the BEC can deliver to whatever it is connected to. The more servos or other things trying to be run, the higher rated BEC you will want.")])])])]),t._v(" "),o("p",[t._v("https://www.dimensionengineering.com/info/bec")]),t._v(" "),o("p",[t._v("Common Issues / Solutions:")]),t._v(" "),o("ul",[o("li",[t._v("...\n"),o("ul",[o("li",[t._v("...")])])])]),t._v(" "),o("h1",{attrs:{id:"power-distribution-board-pdb"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#power-distribution-board-pdb"}},[t._v("#")]),t._v(" Power Distribution Board (PDB)")]),t._v(" "),o("p",[t._v("Used to send power to different parts of the circuit and stand as a safety net. Contains a fuse that would burn out the chip before damaging the rest of the system. Powered from the 5 V line from the BEC. Has the 12 V line run through it to monitor the power. Sends power to the Pixhawk.")]),t._v(" "),o("p",[t._v("The main purpose of our PDB seems to be to convert the power so we can power the pixhawk. I would jut suggest choosing the one that would come along with the pixhawk.")]),t._v(" "),o("p",[t._v("Specs:")]),t._v(" "),o("ul",[o("li",[t._v("...")])]),t._v(" "),o("p",[t._v("Common Issues / Solutions:")]),t._v(" "),o("ul",[o("li",[t._v("...\n"),o("ul",[o("li",[t._v("...")])])])]),t._v(" "),o("h1",{attrs:{id:"motor"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#motor"}},[t._v("#")]),t._v(" Motor")]),t._v(" "),o("p",[t._v("Provides the thrust for the UAS.")]),t._v(" "),o("p",[t._v("Specs:")]),t._v(" "),o("ul",[o("li",[t._v("...")])]),t._v(" "),o("p",[t._v("Common Issues / Solutions:")]),t._v(" "),o("ul",[o("li",[t._v("...\n"),o("ul",[o("li",[t._v("...")])])])]),t._v(" "),o("h1",{attrs:{id:"propellor"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#propellor"}},[t._v("#")]),t._v(" Propellor")]),t._v(" "),o("p",[t._v("Contibutes to the thrust of the UAS")]),t._v(" "),o("p",[t._v("Specs:")]),t._v(" "),o("ul",[o("li",[t._v("...")])]),t._v(" "),o("p",[t._v("Common Issues / Solutions:")]),t._v(" "),o("ul",[o("li",[t._v("...\n"),o("ul",[o("li",[t._v("...")])])])]),t._v(" "),o("p",[t._v("List:")]),t._v(" "),o("ul",[o("li",[t._v("What each part does")]),t._v(" "),o("li",[t._v("How it works?")]),t._v(" "),o("li",[t._v("What do the part specs mean")]),t._v(" "),o("li",[t._v("What are common problems that can be fixed by chnging these specs")]),t._v(" "),o("li",[t._v("What would changing this component also impact")])])])}),[],!1,null,null,null);e.default=s.exports}}]);