/* ==========================================================================
   Variables for theme definition
   ========================================================================== */
/* ==========================================================================
   Mixins
   ========================================================================== */
.l-col-2, .l-col-3, .l-col-4, .l-col-5, .l-col-6, .l-col-7, .l-col-8, .l-col-9, .l-col-10, .l-col-11, .l-col-12, .progress {
  box-layout: border-box; }

/* Vendor prefixes & aggregated properties
   ========================================================================== */
/* ==========================================================================
   Basic styling
   ========================================================================== */
script {
  display: none !important; }

html, body, h1, h2, h3, h4, p, dl, dt, dd, ul, li {
  margin: 0;
  padding: 0; }

html, body {
  min-height: 100%; }

body {
  font: 300 13px/1.5384 "Frutiger LT Pro", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; }

h1, h2, h3, h4 {
  line-height: normal; }

/* ==========================================================================
   Default states
   ========================================================================== */
/* ==========================================================================
   Layout
   ========================================================================== */
.l-primary {
  width: 946px;
  margin: 0 auto;
  padding: 0 20px; }

.l-container {
  min-height: 1px;
  zoom: 1;
  position: relative;
  clear: both;
  width: 100%; }
  .l-container:after {
    clear: both;
    visibility: hidden;
    display: block;
    height: 0;
    font-size: 0;
    content: '.'; }

.l-separated {
  margin-bottom: 65px; }

.l-col-2 {
  float: left;
  width: 16.66667%; }

.l-offset-2 {
  margin-left: 16.66667%; }

.l-col-3 {
  float: left;
  width: 25%; }

.l-offset-3 {
  margin-left: 25%; }

.l-col-4 {
  float: left;
  width: 33.33333%; }

.l-offset-4 {
  margin-left: 33.33333%; }

.l-col-5 {
  float: left;
  width: 41.66667%; }

.l-offset-5 {
  margin-left: 41.66667%; }

.l-col-6 {
  float: left;
  width: 50%; }

.l-offset-6 {
  margin-left: 50%; }

.l-col-7 {
  float: left;
  width: 58.33333%; }

.l-offset-7 {
  margin-left: 58.33333%; }

.l-col-8 {
  float: left;
  width: 66.66667%; }

.l-offset-8 {
  margin-left: 66.66667%; }

.l-col-9 {
  float: left;
  width: 75%; }

.l-offset-9 {
  margin-left: 75%; }

.l-col-10 {
  float: left;
  width: 83.33333%; }

.l-offset-10 {
  margin-left: 83.33333%; }

.l-col-11 {
  float: left;
  width: 91.66667%; }

.l-offset-11 {
  margin-left: 91.66667%; }

.l-col-12 {
  float: left;
  width: 100%; }

.l-offset-12 {
  margin-left: 100%; }

td[class^="l-col"],
th[class^="l-col"] {
  float: none; }

/* General layout rules
   ========================================================================== */
.l-list > * {
  display: block;
  list-style: none;
  width: auto; }

.l-table {
  display: table;
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse; }

.l-table-row, .l-table > li {
  display: table-row; }

.l-table-cell {
  display: table-cell; }

.l-table-cell-0 {
  width: 0%; }

.l-table-cell-5 {
  width: 5%; }

.l-table-cell-10 {
  width: 10%; }

.l-table-cell-15 {
  width: 15%; }

.l-table-cell-20 {
  width: 20%; }

.l-table-cell-25 {
  width: 25%; }

.l-table-cell-30 {
  width: 30%; }

.l-table-cell-35 {
  width: 35%; }

.l-table-cell-40 {
  width: 40%; }

.l-table-cell-45 {
  width: 45%; }

.l-table-cell-50 {
  width: 50%; }

.l-table-cell-55 {
  width: 55%; }

.l-table-cell-60 {
  width: 60%; }

.l-table-cell-65 {
  width: 65%; }

.l-table-cell-70 {
  width: 70%; }

.l-table-cell-75 {
  width: 75%; }

.l-table-cell-80 {
  width: 80%; }

.l-table-cell-85 {
  width: 85%; }

.l-table-cell-90 {
  width: 90%; }

.l-table-cell-95 {
  width: 95%; }

.l-table-cell-100 {
  width: 100%; }

.l-line > * {
  float: none;
  display: inline-block;
  margin-right: -2px;
  vertical-align: middle; }

/* ==========================================================================
   Layout utils, credit: bootstrap
   ========================================================================== */
@-ms-viewport {
  width: device-width; }

.is-hidden {
  display: none !important;
  visibility: hidden; }

.is-shown {
  display: block !important; }

/* Desktops
   ========================================================================== */
@media (min-width: 980px) {
  .is-visible-phone {
    display: none !important; }

  .is-visible-tablet {
    display: none !important; }

  .is-hidden-desktop {
    display: none !important; }

  .is-visible-desktop {
    display: inherit !important; } }
/* Tablets & small desktops
   ========================================================================== */
@media (min-width: 768px) and (max-width: 979px) {
  .is-hidden-desktop {
    display: inherit !important; }

  .is-visible-desktop {
    display: none !important; }

  .is-visible-tablet {
    display: inherit !important; }

  .is-hidden-tablet {
    display: none !important; } }
/* Phones
   ========================================================================== */
@media (max-width: 767px) {
  .is-hidden-desktop {
    display: inherit !important; }

  .is-visible-desktop {
    display: none !important; }

  .is-visible-phone {
    display: inherit !important; }

  .is-hidden-phone {
    display: none !important; } }
/* Print
   ========================================================================== */
.is-visible-print {
  display: none !important; }

@media print {
  .is-visible-print {
    display: inherit !important; }

  .is-hidden-print {
    display: none !important; } }
h2 small, .header-date, .action-now > dt, .action-next > dt, .goodpoints-points, .list-counter > dd, .feedItem-meta > span, .footer {
  color: #494d55; }

a, .header-title span, .goodpoints-points > strong {
  color: #a1bde3; }

.headline-section, .footer, .header {
  border: 2px solid #343941; }

.headline-section, .footer {
  border-width: 2px 0 0; }

.header {
  border-width: 0 0 2px; }

::-moz-selection {
  color: #fbc91e;
  background: black; }

::selection {
  color: #fbc91e;
  background: black; }

body {
  color: #fafafa;
  background: #1d232c; }

a:hover, a:focus
a:active {
  color: #fbc91e; }

.l-primary {
  position: relative; }
  .l-primary:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 5;
    opacity: 0;
    background: url("../design/design.png") 50% 0 no-repeat; }

button {
  height: 40px;
  padding: 0 10px;
  border: none;
  line-height: 40px;
  font: bold 18px "Frutiger LT Pro", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  color: #1d232c;
  background: #fbc91e;
  cursor: pointer;
  -webkit-transition: 0.1s all ease-in-out;
  -moz-transition: 0.1s all ease-in-out;
  -o-transition: 0.1s all ease-in-out;
  transition: 0.1s all ease-in-out;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  border-radius: 5px; }
  button:hover, button:focus, button:active {
    background: #a1bde3; }
  button.ico {
    position: relative;
    padding-left: 50px; }
    button.ico > span {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      overflow: hidden;
      width: 40px;
      padding-top: 4px;
      border-right: 1px solid #1d232c;
      text-align: center;
      line-height: 36px; }

/* ==========================================================================
   Headlines
   ========================================================================== */
h2, .headline, .headline-section, .footer, .header-date, .action-now > dt, .action-next > dt {
  text-transform: uppercase;
  font-size: 14px; }
  h2 small, .headline small, .headline-section small, .footer small, .header-date small, .action-now > dt small, .action-next > dt small {
    font-size: 13px; }

h1 {
  font-size: 50px; }

h2 {
  font-size: 14px;
  font-weight: normal;
  color: #fff; }
  h2 small {
    margin-left: 1em;
    text-transform: none; }

.headline, .headline-section, .footer {
  padding: 15px 0; }

/* ==========================================================================
   Header
   ========================================================================== */
.header {
  padding-top: 230px;
  min-height: 70px;
  background: url("../images/logo.png") 100% 50px no-repeat; }

.header-date {
  position: absolute;
  left: 0;
  top: 20px; }

/* Actions
   ========================================================================== */
.action-now > dt, .action-next > dt {
  margin-bottom: 5px; }
.action-now > dd, .action-next > dd {
  font-size: 22px;
  color: #fff; }

.action-now > dd {
  color: #fbc91e; }

/* ==========================================================================
   GoodPoints
   ========================================================================== */
.goodpoints {
  min-height: 140px;
  padding: 65px 0; }

.goodpoints-info {
  margin-top: -30px;
  text-transform: none;
  font-size: 36px;
  font-weight: normal; }

.goodpoints-points {
  line-height: 1;
  text-align: right;
  letter-spacing: 5px;
  font-size: 167px;
  -webkit-transition: 0.2s color ease-in-out;
  -moz-transition: 0.2s color ease-in-out;
  -o-transition: 0.2s color ease-in-out;
  transition: 0.2s color ease-in-out; }

/* ==========================================================================
   Progressbar
   ========================================================================== */
@-webkit-keyframes progressbar {
  0% {
    -webkit-box-shadow: 0 0 10px #fbc91e;
    -moz-box-shadow: 0 0 10px #fbc91e;
    box-shadow: 0 0 10px #fbc91e;
    opacity: 1; }

  50% {
    -webkit-box-shadow: 0 0 0 #fbc91e;
    -moz-box-shadow: 0 0 0 #fbc91e;
    box-shadow: 0 0 0 #fbc91e;
    opacity: .5; }

  100% {
    -webkit-box-shadow: 0 0 10px #fbc91e;
    -moz-box-shadow: 0 0 10px #fbc91e;
    box-shadow: 0 0 10px #fbc91e;
    opacity: 1; } }

@-moz-keyframes progressbar {
  0% {
    -webkit-box-shadow: 0 0 10px #fbc91e;
    -moz-box-shadow: 0 0 10px #fbc91e;
    box-shadow: 0 0 10px #fbc91e;
    opacity: 1; }

  50% {
    -webkit-box-shadow: 0 0 0 #fbc91e;
    -moz-box-shadow: 0 0 0 #fbc91e;
    box-shadow: 0 0 0 #fbc91e;
    opacity: .5; }

  100% {
    -webkit-box-shadow: 0 0 10px #fbc91e;
    -moz-box-shadow: 0 0 10px #fbc91e;
    box-shadow: 0 0 10px #fbc91e;
    opacity: 1; } }

@-ms-keyframes progressbar {
  0% {
    -webkit-box-shadow: 0 0 10px #fbc91e;
    -moz-box-shadow: 0 0 10px #fbc91e;
    box-shadow: 0 0 10px #fbc91e;
    opacity: 1; }

  50% {
    -webkit-box-shadow: 0 0 0 #fbc91e;
    -moz-box-shadow: 0 0 0 #fbc91e;
    box-shadow: 0 0 0 #fbc91e;
    opacity: .5; }

  100% {
    -webkit-box-shadow: 0 0 10px #fbc91e;
    -moz-box-shadow: 0 0 10px #fbc91e;
    box-shadow: 0 0 10px #fbc91e;
    opacity: 1; } }

@keyframes progressbar {
  0% {
    -webkit-box-shadow: 0 0 10px #fbc91e;
    -moz-box-shadow: 0 0 10px #fbc91e;
    box-shadow: 0 0 10px #fbc91e;
    opacity: 1; }

  50% {
    -webkit-box-shadow: 0 0 0 #fbc91e;
    -moz-box-shadow: 0 0 0 #fbc91e;
    box-shadow: 0 0 0 #fbc91e;
    opacity: .5; }

  100% {
    -webkit-box-shadow: 0 0 10px #fbc91e;
    -moz-box-shadow: 0 0 10px #fbc91e;
    box-shadow: 0 0 10px #fbc91e;
    opacity: 1; } }

.progressbar {
  width: 100%; }
  .progressbar, .progressbar > div {
    height: 7px;
    background: #343942 url("../images/progressbar.png") 0 0 repeat; }
  .progressbar > div {
    background-color: #fbc91e;
    -webkit-animation-duration: 3s;
    -webkit-animation-name: progressbar;
    -webkit-animation-iteration-count: infinite; }

/* ==========================================================================
   Schedule
   ========================================================================== */
.schedule-headline {
  padding: 15px 25px;
  text-transform: none;
  font-size: 24px; }
  .schedule-headline small {
    font-size: 16px; }

.schedule {
  padding: 10px 0;
  min-height: 260px;
  border-right: 1px solid #1d232c;
  font-size: 16px;
  color: #fff;
  background: #343941; }
  .schedule > table {
    table-layout: fixed;
    width: 100%;
    border-spacing: 0; }
  .schedule tr {
    -webkit-transition: 0.2s color ease-in-out;
    -moz-transition: 0.2s color ease-in-out;
    -o-transition: 0.2s color ease-in-out;
    transition: 0.2s color ease-in-out; }
  .schedule th, .schedule td {
    padding: 2px 20px 2px 25px; }
  .schedule th {
    width: 50px;
    text-align: left; }
  .schedule .is-schedule-past {
    color: #5c6167; }
  .schedule .is-schedule-actual {
    color: #fbc91e; }

.is-schedule-decorated {
  background: #343941 url("../images/tools.png") 100% 100% no-repeat; }

/* ==========================================================================
   Repos
   ========================================================================== */
.repos-list {
  table-layout: fixed;
  width: 100%;
  margin-bottom: 25px;
  border-spacing: 0;
  border-top: 1px solid #343941;
  line-height: 1; }
  .repos-list th, .repos-list td {
    padding: 24px 0 13px;
    border-bottom: 1px solid #333941; }
  .repos-list th {
    text-align: left;
    font-size: 36px; }
    .repos-list th a {
      text-decoration: none; }
  .repos-list td {
    text-align: right;
    font-size: 20px; }

.progress {
  float: right;
  padding: 0 10px;
  height: 32px;
  line-height: 32px;
  color: #fff;
  background: #343941; }

/* ==========================================================================
   Coffees
   ========================================================================== */
.list-coffee {
  min-height: 1px;
  zoom: 1; }
  .list-coffee:after {
    clear: both;
    visibility: hidden;
    display: block;
    height: 0;
    font-size: 0;
    content: '.'; }

.coffee {
  position: relative;
  float: left;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 40px;
  margin: 0 15px 15px 0; }
  .coffee:after {
    content: 'coffee';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    clip: rect(0, 40px, 40px, 0);
    text-align: center;
    -webkit-transition: 1s clip ease-in-out;
    -moz-transition: 1s clip ease-in-out;
    -o-transition: 1s clip ease-in-out;
    transition: 1s clip ease-in-out; }
  .coffee.new:after {
    clip: rect(40px, 40px, 40px, 0); }

.list-counter {
  text-align: right; }
  .list-counter > dt {
    line-height: 1;
    font-size: 72px;
    font-weight: bold; }
  .list-counter > dd {
    font-size: 18px; }

/* ==========================================================================
   Feeds
   ========================================================================== */
/* Twitter
   ========================================================================== */
.feedItems {
  margin-right: 50px; }

.feedItem {
  margin-bottom: 30px; }

.feedItem-meta > a {
  margin-right: 10px; }

/* Instagram
   ========================================================================== */
.photoItems {
  min-height: 1px;
  zoom: 1;
  margin-bottom: 25px; }
  .photoItems:after {
    clear: both;
    visibility: hidden;
    display: block;
    height: 0;
    font-size: 0;
    content: '.'; }
  .photoItems > li {
    display: block; }
    .photoItems > li > a {
      float: left;
      width: 140px;
      height: 140px;
      margin: 0 10px 10px 0;
      background: #000;
      -webkit-transition: 0.2s background ease-in-out;
      -moz-transition: 0.2s background ease-in-out;
      -o-transition: 0.2s background ease-in-out;
      transition: 0.2s background ease-in-out; }
      .photoItems > li > a img {
        display: block;
        vertical-align: middle; }
      .photoItems > li > a:hover, .photoItems > li > a:focus, .photoItems > li > a:active {
        background: #1d232c; }

/* ==========================================================================
   Join us
   ========================================================================== */
.text-important {
  line-height: 1.2;
  font-size: 36px;
  font-weight: bold; }

.footer {
  padding-top: 10px;
  text-align: right; }
