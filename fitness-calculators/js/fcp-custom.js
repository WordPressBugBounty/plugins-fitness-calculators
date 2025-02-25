const FCP = fcp;

jQuery(document).ready(function(){

    const FCP = fcp;
    jQuery('#fcp-bmi-intake-height').attr("placeholder", FCP.heightCentimeter);
    jQuery('#fcp-bmi-intake-weight').attr("placeholder", FCP.weightKilogram);

    jQuery('#fcp-water-intake-radio-metric').click(function() {
        jQuery('#fcp-water-intake-radio-imperial').attr("checked",false);
        jQuery('#fcp-water-intake-radio-metric').attr("checked",true);
        jQuery('#fcp-water-intake-radio-imperial').removeClass("fcp-radio-style");
        jQuery('#fcp-water-intake-radio-metric').addClass("fcp-radio-style");
        jQuery('#fcp-water-intake-height').attr("placeholder", FCP.heightCentimeter);
        jQuery('#fcp-water-intake-weight').attr("placeholder", FCP.weightKilogram);
    });

    jQuery('#fcp-water-intake-radio-imperial').click(function() {
        jQuery('#fcp-water-intake-radio-imperial').attr("checked",true);
        jQuery('#fcp-water-intake-radio-metric').attr("checked",false);
        jQuery('#fcp-water-intake-radio-imperial').addClass("fcp-radio-style");
        jQuery('#fcp-water-intake-radio-metric').removeClass("fcp-radio-style");
        jQuery('#fcp-water-intake-height').attr("placeholder", FCP.heightFeet);
        jQuery('#fcp-water-intake-weight').attr("placeholder", FCP.weightPound);
    });



    // protein calculator
    jQuery('#fcp-protein-intake-radio-metric').attr("checked","checked");
    jQuery('#fcp-protein-intake-height').attr("placeholder", FCP.heightCentimeter);
    jQuery('#fcp-protein-intake-weight').attr("placeholder", FCP.weightKilogram);

    jQuery('.fcp-radio-btn-protein-metric').click(function() {
        jQuery('#fcp-protein-intake-radio-imperial').attr("checked",false);
        jQuery('#fcp-protein-intake-radio-metric').attr("checked",true);
        jQuery('#fcp-protein-intake-radio-imperial').removeClass("fcp-radio-style");
        jQuery('#fcp-protein-intake-radio-metric').addClass("fcp-radio-style");
        jQuery('#fcp-protein-intake-height').attr("placeholder", FCP.heightCentimeter);
        jQuery('#fcp-protein-intake-weight').attr("placeholder", FCP.weightKilogram);
    });

    jQuery('.fcp-radio-btn-protein-standard').click(function() {
        jQuery('#fcp-protein-intake-radio-imperial').attr("checked",true);
        jQuery('#fcp-protein-intake-radio-metric').attr("checked",false);
        jQuery('#fcp-protein-intake-radio-imperial').addClass("fcp-radio-style");
        jQuery('#fcp-protein-intake-radio-metric').removeClass("fcp-radio-style");
        jQuery('#fcp-protein-intake-height').attr("placeholder", FCP.heightFeet);
        jQuery('#fcp-protein-intake-weight').attr("placeholder", FCP.weightPound);
    });

    jQuery('.fcp-radio-btn-bmi-standard').click(function() {
        jQuery('#fcp-bmi-intake-radio-imperial').attr("checked",true);
        jQuery('#fcp-bmi-intake-radio-metric').attr("checked",false);
        jQuery('#fcp-bmi-intake-radio-imperial').addClass("fcp-radio-style");
        jQuery('#fcp-bmi-intake-radio-metric').removeClass("fcp-radio-style");
        jQuery('#fcp-bmi-intake-height').attr("placeholder", FCP.heightFeet);
        jQuery('#fcp-bmi-intake-weight').attr("placeholder", FCP.weightPound);
    });

    jQuery('.fcp-radio-btn-bmi-metric').click(function() {
        jQuery('#fcp-bmi-intake-radio-imperial').attr("checked",false);
        jQuery('#fcp-bmi-intake-radio-metric').attr("checked",true);
        jQuery('#fcp-bmi-intake-radio-imperial').removeClass("fcp-radio-style");
        jQuery('#fcp-bmi-intake-radio-metric').addClass("fcp-radio-style");
        jQuery('#fcp-bmi-intake-height').attr("placeholder", FCP.heightCentimeter);
        jQuery('#fcp-bmi-intake-weight').attr("placeholder", FCP.weightKilogram);
    });

    // code for body fat
    jQuery('#fcp-bfc-intake-radio-imperial').click(function() {
        jQuery('#fcp-bfc-intake-radio-imperial').attr("checked",true);
        jQuery('#fcp-bfc-intake-radio-metric').attr("checked",false);
        jQuery('#fcp-bfc-intake-radio-imperial').addClass("fcp-radio-style");
        jQuery('#fcp-bfc-intake-radio-metric').removeClass("fcp-radio-style");
        jQuery('#fcp-bfc-intake-height').attr("placeholder", FCP.heightFeet);
        jQuery('#fcp-bfc-intake-weight').attr("placeholder", FCP.weightPound);
    });

    jQuery('#fcp-bfc-intake-radio-metric').click(function() {
        jQuery('#fcp-bfc-intake-radio-imperial').attr("checked",false);
        jQuery('#fcp-bfc-intake-radio-metric').attr("checked",true);
        jQuery('#fcp-bfc-intake-radio-imperial').removeClass("fcp-radio-style");
        jQuery('#fcp-bfc-intake-radio-metric').addClass("fcp-radio-style");
        jQuery('#fcp-bfc-intake-height').attr("placeholder", FCP.heightCentimeter);
        jQuery('#fcp-bfc-intake-weight').attr("placeholder", FCP.weightKilogram);
    });

    // code for CC
    jQuery('#fcp-cc-radio-metric').attr("checked","checked");
    jQuery('#fcp-cc-height').attr("placeholder", FCP.heightCentimeter);
    jQuery('#fcp-cc-weight').attr("placeholder", FCP.weightKilogram);

    jQuery('#fcp-cc-intake-radio-standard').click(function() {
        jQuery('#fcp-cc-radio-imperial').attr("checked",true);
        jQuery('#fcp-cc-radio-metric').attr("checked",false);
        jQuery('#fcp-cc-radio-imperial').addClass("fcp-radio-style");
        jQuery('#fcp-cc-radio-metric').removeClass("fcp-radio-style");
        jQuery('#fcp-cc-height').attr("placeholder", FCP.heightFeet);
        jQuery('#fcp-cc-weight').attr("placeholder", FCP.weightPound);
    });

    jQuery('#fcp-cc-intake-radio-metric').click(function() {
        jQuery('#fcp-cc-radio-imperial').attr("checked",false);
        jQuery('#fcp-cc-radio-metric').attr("checked",true);
        jQuery('#fcp-cc-radio-imperial').removeClass("fcp-radio-style");
        jQuery('#fcp-cc-radio-metric').addClass("fcp-radio-style");
        jQuery('#fcp-cc-height').attr("placeholder", FCP.heightCentimeter);
        jQuery('#fcp-cc-weight').attr("placeholder", FCP.weightKilogram);
    });


    // only number validation
    jQuery("#fcp-water-intake-height").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if (jQuery.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl/cmd+A
            (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: Ctrl/cmd+C
            (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: Ctrl/cmd+X
            (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });

    jQuery("#fcp-water-intake-weight").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if (jQuery.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl/cmd+A
            (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: Ctrl/cmd+C
            (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: Ctrl/cmd+X
            (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });


});


// water intake calculator
function fcpCalculateWaterIntake()
{

    jQuery('.fcp-calculated-result').html('......');
	// process 1
    jQuery('.fcp-error').hide();
    if(jQuery("input:radio[name='fcp-water-intake-radio']").is(":checked")) {
        jQuery('.fcp-error').hide();
    }
    else
    {
        jQuery('.fcp-error').show();
    }

    if(jQuery("#fcp-water-intake-height").val() == '') {
        jQuery('#fcp-water-intake-height-error').show();
        jQuery("#fcp-water-intake-height").css('border', 'red solid 1px');
    }
    else
    {
        jQuery("#fcp-water-intake-height").css('border', '1px solid #ccc');
        jQuery('#fcp-water-intake-height-error').hide();
    }

    if(jQuery("#fcp-water-intake-weight").val() == '') {
        jQuery('#fcp-water-intake-weight-error').show();
        jQuery("#fcp-water-intake-weight").css('border', 'red solid 1px');
    }
    else
    {
        jQuery("#fcp-water-intake-weight").css('border', '1px solid #ccc');
        jQuery('#fcp-water-intake-weight-error').hide();
    }

    // calculate BMI
    //Calculate BMI- Weight (in Kg)/Height * Height (in meter)
    var weight =  jQuery("#fcp-water-intake-weight").val();
    var height =  jQuery("#fcp-water-intake-height").val();
    if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'metric' )
        {
            // BMI formula BMI = [weight (kg) / height (cm) / height (cm)] x 10,000
            var bmi = (weight / height / height) * 10000;
        }
        if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial')
        {
            // BMI formula BMI = [weight (lb) / height (in) / height (in)] x 703
            // convert height feet into inches
            height = height* 12.000;
            var bmi = (weight / height / height) * 703;
        }

    // unit of water intake
    if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'metric' )
        {
          var water_require_unit = FCP.unitLTR;
        }
        if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
        {
            var water_require_unit = FCP.unitOz;
        }

    // if bmi is less than 25 then follow chart and show result
    if(Math.round(bmi) < 25 )
    {

        if(jQuery('#fcp-water-intake-sex').val() == 'male')
        {
            switch (jQuery('#fcp-water-intake-age').val()) {
                case "14-18":
                    switch(jQuery('#fcp-water-intake-season').val())
                    {
                        case "winter":
                        var water_require_percent = 3300 * 10 / 100;
                        var water_require = 3300 - water_require_percent;
                            switch(jQuery('#fcp-water-intake-activity-level').val())
                            {
                                case "lightly-active":
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "moderately-active":
                                var process2  = water_require * 10 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "very-active":
                                var process2  = water_require * 20 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                            }

                        break;
                        case "normal":
                        var water_require_percent = 3300 * 0;
                        var water_require = 3300 - water_require_percent;
                            switch(jQuery('#fcp-water-intake-activity-level').val())
                            {
                                case "lightly-active":
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }

                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "moderately-active":
                                var process2  = water_require * 10 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "very-active":
                                var process2  = water_require * 20 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                            }

                        break;
                        case "summer":
                        var water_require_percent = 3300 * 0;
                        var water_require = 3300 + water_require_percent;
                        switch(jQuery('#fcp-water-intake-activity-level').val())
                            {
                                case "lightly-active":
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "moderately-active":
                                var process2  = water_require * 10 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "very-active":
                                var process2  = water_require * 20 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                            }

                        break;
                    }

                    break;
                case "19-30":
                    switch(jQuery('#fcp-water-intake-season').val())
                    {
                        case "winter":
                        var water_require_percent = 3700 * 10 / 100;
                        var water_require = 3700 - water_require_percent;
                        switch(jQuery('#fcp-water-intake-activity-level').val())
                            {
                                case "lightly-active":
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "moderately-active":
                                var process2  = water_require * 10 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "very-active":
                                var process2  = water_require * 20 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                            }
                        break;
                        case "normal":
                        var water_require_percent = 3700 * 0;
                        var water_require = 3700 - water_require_percent;
                        switch(jQuery('#fcp-water-intake-activity-level').val())
                            {
                                case "lightly-active":
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "moderately-active":
                                var process2  = water_require * 10 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "very-active":
                                var process2  = water_require * 20 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                            }
                        break;
                        case "summer":
                        var water_require_percent = 3700 * 0;
                        var water_require = 3700 + water_require_percent;
                        switch(jQuery('#fcp-water-intake-activity-level').val())
                            {
                                case "lightly-active":
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "moderately-active":
                                var process2  = water_require * 10 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "very-active":
                                var process2  = water_require * 20 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                            }
                        break;
                    }
                    break;
                case "31-50":
                    switch(jQuery('#fcp-water-intake-season').val())
                    {
                        case "winter":
                        var water_require_percent = 3700 * 10 / 100;
                        var water_require = 3700 - water_require_percent;
                        switch(jQuery('#fcp-water-intake-activity-level').val())
                            {
                                case "lightly-active":
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "moderately-active":
                                var process2  = water_require * 10 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "very-active":
                                var process2  = water_require * 20 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                            }
                        break;
                        case "normal":
                        var water_require_percent = 3700 * 0;
                        var water_require = 3700 - water_require_percent;
                        switch(jQuery('#fcp-water-intake-activity-level').val())
                            {
                                case "lightly-active":
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "moderately-active":
                                var process2  = water_require * 10 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "very-active":
                                var process2  = water_require * 20 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                            }
                        break;
                        case "summer":
                        var water_require_percent = 3700 * 0;
                        var water_require = 3700 + water_require_percent;
                        switch(jQuery('#fcp-water-intake-activity-level').val())
                            {
                                case "lightly-active":
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "moderately-active":
                                var process2  = water_require * 10 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "very-active":
                                var process2  = water_require * 20 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                            }
                        break;
                    }
                    break;
                case "50+":
                    switch(jQuery('#fcp-water-intake-season').val())
                    {
                        case "winter":
                        var water_require_percent = 3700 * 10 / 100;
                        var water_require = 3700 - water_require_percent;
                        switch(jQuery('#fcp-water-intake-activity-level').val())
                            {
                                case "lightly-active":
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "moderately-active":
                                var process2  = water_require * 10 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "very-active":
                                var process2  = water_require * 20 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                            }
                        break;
                        case "normal":
                        var water_require_percent = 3700 * 0;
                        var water_require = 3700 - water_require_percent;
                        switch(jQuery('#fcp-water-intake-activity-level').val())
                            {
                                case "lightly-active":
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "moderately-active":
                                var process2  = water_require * 10 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "very-active":
                                var process2  = water_require * 20 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                            }
                        break;
                        case "summer":
                        var water_require_percent = 3700 * 0;
                        var water_require = 3700 + water_require_percent;
                        switch(jQuery('#fcp-water-intake-activity-level').val())
                            {
                                case "lightly-active":
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "moderately-active":
                                var process2  = water_require * 10 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "very-active":
                                var process2  = water_require * 20 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                            }
                        break;
                    }
                    break;
            }
        }
        if(jQuery('#fcp-water-intake-sex').val() == 'female')
        {
            switch (jQuery('#fcp-water-intake-age').val()) {
                case "14-18":
                    switch(jQuery('#fcp-water-intake-season').val())
                    {
                        case "winter":
                        var water_require_percent = 2300 * 10 / 100;
                        var water_require = 2300 - water_require_percent;
                        switch(jQuery('#fcp-water-intake-activity-level').val())
                            {
                                case "lightly-active":
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "moderately-active":
                                var process2  = water_require * 10 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "very-active":
                                var process2  = water_require * 20 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                            }
                        break;
                        case "normal":
                        var water_require_percent = 2300 * 0;
                        var water_require = 2300 - water_require_percent;
                        switch(jQuery('#fcp-water-intake-activity-level').val())
                            {
                                case "lightly-active":
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "moderately-active":
                                var process2  = water_require * 10 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "very-active":
                                var process2  = water_require * 20 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                            }
                        break;
                        case "summer":
                        var water_require_percent = 2300 * 0;
                        var water_require = 2300 + water_require_percent;
                        switch(jQuery('#fcp-water-intake-activity-level').val())
                            {
                                case "lightly-active":
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "moderately-active":
                                var process2  = water_require * 10 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "very-active":
                                var process2  = water_require * 20 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                            }
                        break;
                    }
                    break;
                case "19-30":
                    switch(jQuery('#fcp-water-intake-season').val())
                    {
                        case "winter":
                        var water_require_percent = 2700 * 10 / 100;
                        var water_require = 2700 - water_require_percent;
                        switch(jQuery('#fcp-water-intake-activity-level').val())
                            {
                                case "lightly-active":
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "moderately-active":
                                var process2  = water_require * 10 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "very-active":
                                var process2  = water_require * 20 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                            }
                        break;
                        case "normal":
                        var water_require_percent = 2700 * 0;
                        var water_require = 2700 - water_require_percent;
                        switch(jQuery('#fcp-water-intake-activity-level').val())
                            {
                                case "lightly-active":
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "moderately-active":
                                var process2  = water_require * 10 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "very-active":
                                var process2  = water_require * 20 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                            }
                        break;
                        case "summer":
                        var water_require_percent = 2700 * 0;
                        var water_require = 2700 + water_require_percent;
                        switch(jQuery('#fcp-water-intake-activity-level').val())
                            {
                                case "lightly-active":
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "moderately-active":
                                var process2  = water_require * 10 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "very-active":
                                var process2  = water_require * 20 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                            }
                        break;
                    }
                    break;
                case "31-50":
                    switch(jQuery('#fcp-water-intake-season').val())
                    {
                        case "winter":
                        var water_require_percent = 2700 * 10 / 100;
                        var water_require = 2700 - water_require_percent;
                        switch(jQuery('#fcp-water-intake-activity-level').val())
                            {
                                case "lightly-active":
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "moderately-active":
                                var process2  = water_require * 10 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "very-active":
                                var process2  = water_require * 20 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                            }
                        break;
                        case "normal":
                        var water_require_percent = 2700 * 0;
                        var water_require = 2700 - water_require_percent;
                        switch(jQuery('#fcp-water-intake-activity-level').val())
                            {
                                case "lightly-active":
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "moderately-active":
                                var process2  = water_require * 10 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "very-active":
                                var process2  = water_require * 20 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                            }
                        break;
                        case "summer":
                        var water_require_percent = 2700 * 0;
                        var water_require = 2700 + water_require_percent;
                        switch(jQuery('#fcp-water-intake-activity-level').val())
                            {
                                case "lightly-active":
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "moderately-active":
                                var process2  = water_require * 10 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "very-active":
                                var process2  = water_require * 20 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                            }
                        break;
                    }
                    break;
                case "50+":
                    switch(jQuery('#fcp-water-intake-season').val())
                    {
                        case "winter":
                        var water_require_percent = 2700 * 10 / 100;
                        var water_require = 2700 - water_require_percent;
                        switch(jQuery('#fcp-water-intake-activity-level').val())
                            {
                                case "lightly-active":
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "moderately-active":
                                var process2  = water_require * 10 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "very-active":
                                var process2  = water_require * 20 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                            }
                        break;
                        case "normal":
                        var water_require_percent = 2700 * 0;
                        var water_require = 2700 - water_require_percent;
                        switch(jQuery('#fcp-water-intake-activity-level').val())
                            {
                                case "lightly-active":
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "moderately-active":
                                var process2  = water_require * 10 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "very-active":
                                var process2  = water_require * 20 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                            }
                        break;
                        case "summer":
                        var water_require_percent = 2700 * 0;
                        var water_require = 2700 + water_require_percent;
                        switch(jQuery('#fcp-water-intake-activity-level').val())
                            {
                                case "lightly-active":
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "moderately-active":
                                var process2  = water_require * 10 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                                case "very-active":
                                var process2  = water_require * 20 / 100;
                                water_require = water_require + process2;
                                if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
                                {
                                    water_require = Math.round(water_require / 29.5735);
                                }
                                else
                                {
                                    water_require = (water_require/1000).toFixed(1);
                                }
                                jQuery('.fcp-calculated-result').html(water_require+' '+water_require_unit);
                                break;
                            }
                        break;
                    }
                    break;
            }
        }
    }

    if(Math.round(bmi) > 25 )
    {

        if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'metric' )
        {
          // if it is metric then result will be shown in litre
          // convert  kg to ml
          var water_require = ((weight * 2.20462 ) * 2/3) * 29.5735;
          water_require  =  water_require /1000;
          switch(jQuery('#fcp-water-intake-season').val())
              {
                    case "winter":
                         var water_require_percent =  water_require * 10 /100 ;
                         water_require = water_require - water_require_percent;

                          switch(jQuery('#fcp-water-intake-activity-level').val())
                          {
                                case "moderately-active":
                                var water_require_percent =  water_require * 10 /100 ;
                                water_require = water_require + water_require_percent;
                                break;
                                case "very-active":
                                var water_require_percent =  water_require * 20 /100 ;
                                water_require = water_require + water_require_percent;
                                break;
                          }
                    break;
                    case "summer":
                         var water_require_percent =  water_require * 10 /100 ;
                         water_require = water_require + water_require_percent;
                         switch(jQuery('#fcp-water-intake-activity-level').val())
                          {
                                case "moderately-active":
                                var water_require_percent =  water_require * 10 /100 ;
                                water_require = water_require + water_require_percent;
                                break;
                                case "very-active":
                                var water_require_percent =  water_require * 20 /100 ;
                                water_require = water_require + water_require_percent;
                                break;
                          }
                    break;
              }
          jQuery('.fcp-calculated-result').html(water_require.toFixed(1)+' ltr');

        }

        if(jQuery('input[name=fcp-water-intake-radio]:checked').val() == 'imperial' )
        {
            // if it is in imperial then result will shown in  Ounce
            // Weight (in pound)*0.666666 = result in ounce (oz)
            var water_require = weight * 2/3 ;
            switch(jQuery('#fcp-water-intake-season').val())
              {
                    case "winter":
                         var water_require_percent =  water_require * 10 /100 ;
                         water_require = water_require - water_require_percent;

                          switch(jQuery('#fcp-water-intake-activity-level').val())
                          {
                                case "moderately-active":
                                var water_require_percent =  water_require * 10 /100 ;
                                water_require = water_require + water_require_percent;
                                break;
                                case "very-active":
                                var water_require_percent =  water_require * 20 /100 ;
                                water_require = water_require + water_require_percent;
                                break;
                          }
                    break;
                    case "summer":
                         var water_require_percent =  water_require * 10 /100 ;
                         water_require = water_require + water_require_percent;
                         switch(jQuery('#fcp-water-intake-activity-level').val())
                          {
                                case "moderately-active":
                                var water_require_percent =  water_require * 10 /100 ;
                                water_require = water_require + water_require_percent;
                                break;
                                case "very-active":
                                var water_require_percent =  water_require * 20 /100 ;
                                water_require = water_require + water_require_percent;
                                break;
                          }
                    break;
              }
            jQuery('.fcp-calculated-result').html(Math.round(water_require)+' Oz');
        }

    }


}


// protien intake calculator
function fcpCalculateproteinIntake()
{

    jQuery('.fcp-protein-calculated-result').html('......');
    // process 1
    jQuery('.fcp-error').hide();
    if(jQuery("input:radio[name='fcp-protein-intake-radio']").is(":checked")) {
        jQuery('.fcp-error').hide();
    }
    else
    {
        jQuery('.fcp-error').show();
    }

    if(jQuery("#fcp-protein-intake-height").val() == '') {
        jQuery('#fcp-protein-intake-height-error').show();
    }
    else
    {
        jQuery('#fcp-protein-intake-height-error').hide();
    }

    if(jQuery("#fcp-protein-intake-weight").val() == '') {
        jQuery('#fcp-protein-intake-weight-error').show();
    }
    else
    {
        jQuery('#fcp-protein-intake-weight-error').hide();
    }

    if( jQuery("#fcp-protein-intake-age").val() < 14 || jQuery("#fcp-protein-intake-age").val() > 80)
    {
        jQuery('#fcp-protein-intake-age-error').show();
    }
    else
    {
        jQuery('#fcp-protein-intake-age-error').hide();
    }

    var protien_require = '';
    var protien_require_addon = 0;
    var protein_unit = jQuery('input[name=fcp-protein-intake-radio]:checked').val();

    // 1st step if age is more than 14
    if(jQuery("#fcp-protein-intake-age").val() >= 14)
    {
        if(jQuery("#fcp-protein-intake-age").val() >= 14 &&  jQuery("#fcp-protein-intake-age").val() <= 18 )
        {

            if(protein_unit == 'imperial')
            {
                protien_require = 0.00198416;
            }
            else
            {
                protien_require = 0.9;
            }
        }
        if(jQuery("#fcp-protein-intake-age").val() >= 19 &&  jQuery("#fcp-protein-intake-age").val() <= 30 )
        {
            if(protein_unit == 'imperial')
            {
                protien_require = 0.0017637;
            }
            else
            {
                protien_require = 0.8;
            }
        }
        if(jQuery("#fcp-protein-intake-age").val() >= 31 &&  jQuery("#fcp-protein-intake-age").val() <= 40 )
        {
            if(protein_unit == 'imperial')
            {
                protien_require = 0.00198416;
            }
            else
            {
                protien_require = 0.9;
            }
        }
        if(jQuery("#fcp-protein-intake-age").val() >= 41 &&  jQuery("#fcp-protein-intake-age").val() <= 50 )
        {
            if(protein_unit == 'imperial')
            {
                protien_require = 0.00220462;
            }
            else
            {
                protien_require = 1;
            }
        }
        if(jQuery("#fcp-protein-intake-age").val() >= 51 &&  jQuery("#fcp-protein-intake-age").val() <= 60 )
        {
            if(protein_unit == 'imperial')
            {
                protien_require = 0.00242508;
            }
            else
            {
                protien_require = 1.1;
            }
        }
        if(jQuery("#fcp-protein-intake-age").val() >= 61 &&  jQuery("#fcp-protein-intake-age").val() <= 70 )
        {
            if(protein_unit == 'imperial')
            {
                protien_require = 0.00264555;
            }
            else
            {
                protien_require = 1.2;
            }
        }
        if(jQuery("#fcp-protein-intake-age").val() >= 71 &&  jQuery("#fcp-protein-intake-age").val() <= 80 )
        {
            if(protein_unit == 'imperial')
            {
                protien_require = 0.00286601;
            }
            else
            {
                protien_require = 1.3;
            }
        }


        // 2nd step check if sex is female then change other wise no change
        if(jQuery("#fcp-protein-intake-sex").val() == 'female')
        {
            if(protein_unit == 'imperial')
            {
                protien_require = protien_require -  0.000220462;
            }
            else
            {
                protien_require = protien_require -  0.1;
            }
        }


        // 3rd step check activity level
        switch(jQuery("#fcp-protein-intake-activity-level").val())
        {
            case"lightly-active":
                if(protein_unit == 'imperial')
                {
                    protien_require = protien_require +  0.000440925;
                }
                else
                {
                    protien_require = protien_require +  0.2;
                }
            break;
            case"moderately-active":
                if(protein_unit == 'imperial')
                {
                    protien_require = protien_require +  0.00110231;
                }
                else
                {
                    protien_require = protien_require +  0.5;
                }
            break;
            case"very-active":
                if(protein_unit == 'imperial')
                {
                    protien_require = protien_require +  0.0017637;
                }
                else
                {
                    protien_require = protien_require +  0.8;
                }
            break;
        }


        // 4th step check user goal
        var bmi = '';
        switch(jQuery('#fcp-protein-intake-goal').val())
        {
            case "fat-loss":
            // calculate BMI
            if(protein_unit == 'imperial')
                {
                    //In Standard- BMI = [weight (lb) / height (in) / height (in)] x 703
                    var weight = jQuery('#fcp-protein-intake-weight').val();
                    var height = jQuery('#fcp-protein-intake-height').val();
                    height = height* 12.000;
                    bmi = (weight / height / height) * 703;
                }
                else
                {
                    //In Metric- BMI = [weight (kg) / height (cm) / height (cm)] x 10,000
                    var weight = jQuery('#fcp-protein-intake-weight').val();
                    var height = jQuery('#fcp-protein-intake-height').val();
                    bmi = (weight / height / height) * 10000;
                    bmi  = bmi.toFixed(0);
                }


                if(bmi < 25 )
                {
                    protien_require_addon = (protein_unit == 'imperial') ? 0.00396832 : 1.8;
                }

                if(bmi >= 25 && bmi <= 30 )
                {
                    protien_require_addon = (protein_unit == 'imperial') ? 0.004629708 : 2.1;
                }

                if(bmi >= 31 && bmi <= 35 )
                {
                    protien_require_addon = (protein_unit == 'imperial') ? 0.00440925 : 2.0;
                }

                if(bmi >= 36 && bmi <= 40 )
                {
                    protien_require_addon = (protein_unit == 'imperial') ? 0.004188783 : 1.9;
                }

                if(bmi >= 41 && bmi <= 45 )
                {
                    protien_require_addon = (protein_unit == 'imperial') ? 0.003747858 : 1.7;
                }

                if(bmi >= 46 && bmi <= 50 )
                {
                    protien_require_addon = (protein_unit == 'imperial') ? 0.003306934 : 1.5;
                }

                if(bmi >= 50 )
                {
                    protien_require_addon = (protein_unit == 'imperial') ? 0.002866009 : 1.3;
                }

            break;
            case "muscle-gain":
                    protien_require = (protein_unit == 'imperial') ? protien_require + 0.00132277 : protien_require + 0.6;
            break;
        }

        // last step
        protien_require = (protein_unit == 'imperial') ? ((protien_require + protien_require_addon)/2.20462)  * jQuery('#fcp-protein-intake-weight').val() : (protien_require + protien_require_addon) * jQuery('#fcp-protein-intake-weight').val();
        protien_require = protien_require.toFixed(2);
        protien_require = (protein_unit == 'imperial') ? protien_require+" "+ FCP.unitLBS : protien_require+" " + FCP.unitGram;
        jQuery('.fcp-protein-calculated-result').html(protien_require);

    }
}


// BMI calculator
function fcpCalculatebmiIntake()
{

    jQuery('.fcp-bmi-calculated-result').html('......');
    // process 1
    jQuery('.fcp-error').hide();
    if(jQuery("input:radio[name='fcp-bmi-intake-radio']").is(":checked")) {
        jQuery('.fcp-error').hide();
    }
    else
    {
        jQuery('.fcp-error').show();
    }

    if(jQuery("#fcp-bmi-intake-height").val() == '') {
        jQuery('#fcp-bmi-intake-height-error').show();
    }
    else
    {
        jQuery('#fcp-bmi-intake-height-error').hide();
    }

    if(jQuery("#fcp-bmi-intake-weight").val() == '') {
        jQuery('#fcp-bmi-intake-weight-error').show();
    }
    else
    {
        jQuery('#fcp-bmi-intake-weight-error').hide();
    }


    var bmi_require = '';
    var bmi_require_addon = 0;
    var protein_unit = jQuery('input[name=fcp-bmi-intake-radio]:checked').val();

    // 1st step if age is more than 14
    if(jQuery("#fcp-bmi-intake-weight").val() != '' && jQuery("#fcp-bmi-intake-height").val() != '')
    {
        // 4th step check user goal
        var bmi = '';


        var weight =  jQuery("#fcp-bmi-intake-weight").val();
        var height =  jQuery("#fcp-bmi-intake-height").val();
        if(jQuery('input[name=fcp-bmi-intake-radio]:checked').val() == 'metric' )
            {
                // BMI formula BMI = [weight (kg) / height (cm) / height (cm)] x 10,000
                var bmi = (weight / height / height) * 10000;
            }
            if(jQuery('input[name=fcp-bmi-intake-radio]:checked').val() == 'imperial')
            {
                // BMI formula BMI = [weight (lb) / height (in) / height (in)] x 703
                height = height* 12.000;
                var bmi = (weight / height / height) * 703;
            }

        var suggestionText = '';
        if(Math.round(bmi) < 18.5) {
            suggestionText = ' '+ FCP.bmiUnderweight;
        }

        if(Math.round(bmi) > 18.5 && Math.round(bmi) < 24.9) {
            suggestionText = ' '+ FCP.bmiNormalweight;
        }

        if(Math.round(bmi) > 25 && Math.round(bmi) < 29.9) {
            suggestionText = ' '+ FCP.bmiOverweight;
        }

        if(Math.round(bmi) > 30 && Math.round(bmi) < 34.9) {
            suggestionText = ' '+FCP.bmiClass1;
        }

        if(Math.round(bmi) > 35 && Math.round(bmi) < 39.9) {
            suggestionText = ' '+FCP.bmiClass2;
        }

        if(Math.round(bmi) > 40) {
            suggestionText = ' '+FCP.bmiClass3;
        }


        jQuery('.fcp-bmi-calculated-result').html(" " + Math.round(bmi) + suggestionText);
        jQuery('#bmiResultTable').removeClass("hide_result");

    }
}

function fcpCalculatebfcIntake()
{

    jQuery('.fcp-bfc-calculated-result').html('......');
    // process 1
    jQuery('.fcp-error').hide();
    if(jQuery("input:radio[name='fcp-bfc-intake-radio']").is(":checked")) {
        jQuery('.fcp-error').hide();
    }
    else
    {
        jQuery('.fcp-error').show();
    }

    if(jQuery("input:radio[name='fcp-bfc-gender']").is(":checked")) {
        jQuery('.fcp-error-gender').hide();
    }
    else
    {
        jQuery('.fcp-error-gender').show();
    }

    if(jQuery("#fcp-bfc-intake-height").val() == '') {
        jQuery('#fcp-bfc-intake-height-error').show();
        jQuery("#fcp-bfc-intake-height").css('border', 'red solid 1px');
    }
    else
    {
        jQuery('#fcp-bfc-intake-height-error').hide();
        jQuery("#fcp-bfc-intake-height").css('border', '#ccc solid 1px');
    }

    if(jQuery("#fcp-bfc-intake-weight").val() == '') {
        jQuery('#fcp-bfc-intake-weight-error').show();
        jQuery("#fcp-bfc-intake-weight").css('border', 'red solid 1px');
    }
    else
    {
        jQuery('#fcp-bfc-intake-weight-error').hide();
        jQuery("#fcp-bfc-intake-weight").css('border', '#ccc solid 1px');
    }

    if(jQuery("#fcp-bfc-age").val() == '') {
        jQuery('#fcp-bfc-age-error').show();
        jQuery("#fcp-bfc-age").css('border', 'red solid 1px');
    }
    else
    {
        jQuery('#fcp-bfc-age-error').hide();
        jQuery("#fcp-bfc-age").css('border', '#ccc solid 1px');
    }


    var weight =  jQuery("#fcp-bfc-intake-weight").val();
    var height =  jQuery("#fcp-bfc-intake-height").val();
    var age =  jQuery("#fcp-bfc-age").val();
    if(jQuery('input[name=fcp-bfc-intake-radio]:checked').val() == 'metric' )
        {
            // BMI formula BMI = [weight (kg) / height (cm) / height (cm)] x 10,000
            var bmi = (weight / height / height) * 10000;
        }
        if(jQuery('input[name=fcp-bfc-intake-radio]:checked').val() == 'imperial')
        {
            // BMI formula BMI = [weight (lb) / height (in) / height (in)] x 703
            height = height* 12.000;
            var bmi = (weight / height / height) * 703;
        }

     // calculate BFP (Body Fat percentage)
     // if age is more than 18 or less
     var bfp = '';
     if(age > 18)
     {
        // check gender here
        if(jQuery('input[name=fcp-bfc-gender]:checked').val() == 'male')
        {
            //BFP = 1.20 × BMI + 0.23 × Age - 16.2;
            bfp = 1.20 * bmi + 0.23 * age - 16.2;
        }
        if(jQuery('input[name=fcp-bfc-gender]:checked').val() == 'female')
        {
            //BFP = 1.20 × BMI + 0.23 × Age - 5.4
            bfp = 1.20 * bmi + 0.23 * age - 5.4;
        }
     }
     else
     {
        // check gender here
        if(jQuery('input[name=fcp-bfc-gender]:checked').val() == 'male')
        {
            //BFP = 1.51 × BMI - 0.70 × Age - 2.2;
            bfp = 1.51 * bmi - 0.70 * age - 2.2;
        }
        if(jQuery('input[name=fcp-bfc-gender]:checked').val() == 'female')
        {
            //BFP = 1.51 × BMI - 0.70 × Age + 1.4
            bfp = 1.51 * bmi - 0.70 * age + 1.4;
        }
     }

    if(jQuery("#fcp-bfc-intake-height").val() != '' && jQuery("#fcp-bfc-age").val() != '' && jQuery("#fcp-bfc-intake-weight").val() != '')
    {
        jQuery('.fcp-bfc-calculated-result').html(Math.round(bfp)+'%');
        jQuery('#bfcResultTable').removeClass("hide_result");
    }
}

function fcpCalculateccIntake()
{

    jQuery('.fcp-cc-calculated-result').html('......');
    jQuery('.fcp-error').hide();
    
    if(jQuery("#fcp-cc-height").val() == '') {
        jQuery('#fcp-cc-height-error').show();
        jQuery("#fcp-cc-height").css('border', 'red solid 1px');
    }
    else
    {
        jQuery('#fcp-cc-height-error').hide();
        jQuery("#fcp-cc-height").css('border', '#ccc solid 1px');
    }

    if(jQuery("#fcp-cc-weight").val() == '') {
        jQuery('#fcp-cc-error').show();
        jQuery("#fcp-cc-weight").css('border', 'red solid 1px');
    }
    else
    {
        jQuery('#fcp-cc-error').hide();
        jQuery("#fcp-cc-weight").css('border', '#ccc solid 1px');
    }

    if(jQuery("#fcp-cc-age").val() == '') {
        jQuery('#fcp-cc-age-error').show();
        jQuery("#fcp-cc-age").css('border', 'red solid 1px');
    }
    else
    {
        jQuery('#fcp-cc-error').hide();
        jQuery("#fcp-cc-age").css('border', '#ccc solid 1px');
    }


    var weight =  jQuery("#fcp-cc-weight").val();
    var height =  jQuery("#fcp-cc-height").val();
    var age =  jQuery("#fcp-cc-age").val();
    if(jQuery('input[name=fcp-cc-intake-radio]:checked').val() == 'metric' )
        {
            // Calculate basal metabolic rate (BMR), or the calories your body burns simply by being alive.
            //For men: 10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) + 5 (kcal / day)
            if(jQuery('input[name=fcp-cc-gender]:checked').val() == 'male')
                {
                    var bmr = 10 * weight + 6.25 * height  - 5 * age + 5;
                }
                //For women: 10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) -161 (kcal / day)
                if(jQuery('input[name=fcp-cc-gender]:checked').val() == 'female')
                {
                    var bmr = 10 * weight + 6.25 * height  - 5 * age - 161;
                }
        }
        if(jQuery('input[name=fcp-cc-intake-radio]:checked').val() == 'imperial')
        {
            //For men: 10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) + 5 (kcal / day)
            weight = weight * 2.2046; // lbs
            height = height/ 0.032808; // cm
            if(jQuery('input[name=fcp-cc-gender]:checked').val() == 'male')
                {
                    var bmr = 10 * weight + 6.25 * height  - 5 * age + 5;
                }
                //For women: 10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) -161 (kcal / day)
                if(jQuery('input[name=fcp-cc-gender]:checked').val() == 'female')
                {
                    var bmr = 10 * weight + 6.25 * height  - 5 * age - 161;
                }
        }
        
        switch (jQuery('#fcp-cc-activity-level').val()) {
            case 'sedentary':
                bmr = bmr * 1.2;
                break;
            case 'lightly-active':
                bmr = bmr * 1.375;
                break;
            case 'moderately-active':
                bmr = bmr * 1.550;
                break;
            case 'very-active':
                bmr = bmr * 1.725;
                break;
            case 'extra-active':
                bmr = bmr * 1.9;
                break;
        }
        

    if(jQuery("#fcp-cc-height").val() != '' && jQuery("#fcp-cc-age").val() != '' && jQuery("#fcp-cc-weight").val() != '')
    {
        jQuery('.fcp-cc-calculated-result').html(Math.round(bmr));
        jQuery('#ccResultTable').removeClass("hide_result");
    }
}




function iptfieldCheck(ifcInput, ifcRequired, ifcType){
    var ifcIVal = trimAll("" + ifcInput.value);
    var ifcErrMsg = "";
    if ("r"==ifcRequired.toLowerCase()){
        if (ifcIVal.length<1){
            //ifcErrMsg = "required field";
            ifcInput.addEventListener("blur", function(){
                var ifcrIVal = trimAll("" + ifcInput.value);
                if (ifcrIVal.length<1){
                    iptErrmsg(ifcInput, FCP.requireField);
                }
            });
        }
    }
    if (ifcIVal.length>0){
        var ifcTemp = ifcType.toLowerCase();
        ifcIVal = ifcIVal.replace(/ /g, "").replace(/ /g, "").replace(/,/g, "");
        if (ifcTemp=="n"){
            if ((!isNumber(ifcIVal))&&(ifcIVal!="-")&&(ifcIVal!=".")) ifcErrMsg = FCP.numberOnly;
        }else if (ifcTemp=="pn"){
            if (!(isNumber(ifcIVal)&&(Number(ifcIVal)>0))) ifcErrMsg = FCP.positiveNumberOnly;
        }else if (ifcTemp=="pzn"){
            if (!(isNumber(ifcIVal)&&(Number(ifcIVal)>=0))) ifcErrMsg = FCP.nonNegativeNumberOnly;
        }else if (ifcTemp=="i"){
            if ((!isInteger(ifcIVal))&&(ifcIVal!="-")&&(ifcIVal!=".")) ifcErrMsg = FCP.integerOnly;
        }else if (ifcTemp=="pi"){
            if (!(isInteger(ifcIVal)&&(Number(ifcIVal)>0))) ifcErrMsg = FCP.positiveIntegerOnly;
        }else if (ifcTemp=="pzi"){
            if (!(isNumber(ifcIVal)&&(Number(ifcIVal)>=0))) ifcErrMsg = FCP.nonNegativeIntegerOnly;
        }
    }
    iptErrmsg(ifcInput, ifcErrMsg);
}
