/*jslint node: true */
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';

var mobileMenu = new MobileMenu();

var revealFI = new RevealOnScroll($(".feature-item"), "85%");
var revealTM = new RevealOnScroll($(".testimonial"), "60%");

var stickyHeader = new StickyHeader();

