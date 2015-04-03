var goingToSection = location.hash;
var inf = function(text) {
    console.log(text);
}

var changeHash = function(hashTag) {
    if (hashTag.length > 0 && hashTag.substr(0,1) != "#") {
        hashTag = '#' + hashTag;
    }
    if(history && history.pushState) {
        history.pushState(null, null, hashTag);
    }
    else {
        location.hash = hashTag;
    }
}

var currentSection = '',
currentSubSection = '',
scrolling = false,
menusections = {},
_height = $(window).height();
var firstSection = Number.MAX_VALUE;
var addMenuSection = function() {
    var self = $(this);
    var sectionName = self.attr("id");
    var sectionPosition = Math.floor(self.offset().top);
    if (sectionPosition < firstSection) {
        firstSection = sectionPosition;
    }
    menusections[sectionName] = sectionPosition;
    
}

var withinSection = function($this,pos,menuSection,parentSectionAttr,parentSection,checkElement) {
    //return (menusections[position] > pos && menusections[position] < pos + _height && position != currentSection)
    inf("Position: " + pos);
    for(position in menusections){ 
        if (position != currentSection) {
            if (menusections[position] == firstSection) {
                if (pos < menusections[position] + _height) {
                    if(highlightSection(pos,menuSection,parentSectionAttr,parentSection,checkElement)) {
                        break;
                    }
                }
            } else if (menusections[position] > pos && menusections[position] < pos + _height) {
                if(highlightSection(pos,menuSection,parentSectionAttr,parentSection,checkElement)) {
                    break;
                }
            }
        } else {
            inf("Current Section: " + currentSection);
        }
    }
}
/*
 *var $this = $(self),
    pos = $this.scrollTop(),   
    menuSection, 
    parentSectionAttr, 
    parentSection, 
    checkElement;
 */
var highlightSection = function(pos,menuSection,parentSectionAttr,parentSection,checkElement) {
    $('a').removeClass('active1');
    currentSection = position;

    menuSection = $('#nav_' + position);

    menuSection.addClass('active1');

    parentSectionAttr = menuSection.attr("data-has-parent");
    //location.hash = menuSection.attr("href");
    changeHash(menuSection.attr("href"));

    if (parentSectionAttr != currentSubSection) {
        parentSection = $("a[data-parent-name="+parentSectionAttr + "]");

        $('#btmenu li').removeClass('active');
        $(parentSection).closest('li').addClass('active');
                

        checkElement = $(parentSection).next();
        checkElement.attr("data-parent-of", parentSectionAttr);
    }
    //scrolling = true;
    if(checkElement !== undefined) {
        if(goingToSection == '') {
            if( checkElement.is('ul') && checkElement.is(':visible') ) {
                $(parentSection).closest('li').removeClass('active');
                checkElement.slideUp('normal');
                inf("SLIDING UP OF:");
                inf(checkElement);
            }

            if( checkElement.is('ul') && !checkElement.is(':visible') ) {
                $('#btmenu ul ul:visible').slideUp('normal');
                checkElement.slideDown('normal');
                inf("currentSubSection: " + currentSubSection);
            }
        } else {
            if(checkElement.is('ul') && checkElement.is(':visible') && (checkElement.attr("data-parent-of") != goingToSection)) {
                $(parentSection).closest('li').removeClass('active');
                checkElement.slideUp('normal');
                inf("SLIDING UP OF:");
                inf(checkElement);
            }

            if(checkElement.is('ul') && !checkElement.is(':visible')  && (checkElement.attr("data-parent-of") == goingToSection)) {
                $('#btmenu ul ul:visible').slideUp('normal');
                checkElement.slideDown('normal');
                inf("currentSubSection: " + currentSubSection);
            }
        }
                
        currentSubSection = parentSectionAttr;

        
        return true;
    }
    return false;
}

var scrollFunction = function(){
    if (this === window) {
        self = document;
    } else {
        self = this;
    }
    var $this = $(self),
    pos = $this.scrollTop(),   
    menuSection, 
    parentSectionAttr, 
    parentSection, 
    checkElement;
    withinSection($this,pos,menuSection,parentSectionAttr,parentSection,checkElement);

};

var activateFixToElements = function() {
    $('nav').fixTo('start');
    $('section').fixTo('start');
}

var deactivateFixToElements = function() {
    $('nav').fixTo('stop');
    $('section').fixTo('stop');
}

var VideoModal = {
    init:function() {
        //Get all the video links
        var videoLinks = $("a.video-link");
        videoLinks.click(function() {
            var self = $(this);
            var modalShowId = self.attr("href");
            deactivateFixToElements();
            $(".video-modal").hide("fast");
            $("body").css("overflow","hidden");
            $(modalShowId).show("fast");
            $(modalShowId).css("z-index","2000");
            
            return false;
        });
        
        $(".video-modal").click(function() {
            $(this).hide("slow");
            $("body").css("overflow","visible");
            activateFixToElements();
        });
        
        $(".video-container").click(function() {
            return false;
        });
    }
    
}
$(document).ready(function(){
    VideoModal.init();

    $('#btmenu > ul > li:has(ul)').addClass("has-sub");
    $('#btmenu li a:eq(1)').trigger('click');
    $('#btmenu > ul > li > a').click(function() {
        goingToSection = $(this).attr("data-parent-name");
        var checkElement = $(this).next();

        $('#btmenu li').removeClass('active');
        $(this).closest('li').addClass('active');	

        if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            $(this).closest('li').removeClass('active');
            checkElement.slideUp('normal');

        }

        if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            $('#btmenu ul ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
        }

        if (checkElement.is('ul')) {
            return false;
        }
        return true;
    });
    
    $('a[href*=#]:not([href=#])').not("a.video-link").click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            $('.menusection').each(addMenuSection);
            var fullHash = this.hash.slice(1);
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                inf("Clicked on a link...");
                inf(this);
                $('html,body').animate({
                    scrollTop: target.offset().top - 70
                }, 1000, function() {
                    changeHash(fullHash);
                    //location.hash = fullHash;
                    inf(fullHash);
                    goingToSection = '';
                });
                return false;
                
            }
        }
        return true;
    });
    
    currentSection = '',
    currentSubSection = '',
    scrolling = false,
    menusections = {},
    _height = $(window).height();

    // Grab positions of our sections 
    $('.menusection').each(addMenuSection);

    $(document).scroll(scrollFunction);
    
    if(goingToSection != '') {
        setTimeout(function() {
            $("a[href="+goingToSection+"]").click();
        },2000);
        
    }
    
    
    positionBackground();
    
    
    
});
function changePosition($outer, positions, i, position) {
    positions[i] = position;
    $outer.css('background-position', positions.join());
}
var outerCss = '';
function positionBackground() {
    /*
     * Background positions
     *
     */
    var $outer = $("#outerWrapDiv"),
    invite_position = $("#invite_network").offset(),
    review_position = $("#review_performance").offset(),
    schedule_position = $("#schedule_webinar").offset(),
    positions = $outer.css('background-position').split(',');
    
    changePosition($outer, positions, 0, "50% " + (Math.floor(invite_position.top) - 68) + "px");
    changePosition($outer, positions, 1, "50% " + (Math.floor(review_position.top) - 68) + "px");
    changePosition($outer, positions, 2, "50% " + (Math.floor(schedule_position.top) -48) + "px");
    
    if (outerCss != $outer.css('background-position')) {
        setTimeout(positionBackground, 1000);
        console.log("Going to reposition...");
    }
    outerCss = $outer.css('background-position');
    
    
}