//=== JQUERY Functions Setup =================================

	function check_connection_integria(){

		jQuery(document).ready(function($) {

			jQuery('#loading_setup').css({'display':'inline' , 'margin-left' : '20px'});
			jQuery('#false_setup').css('display','none');
			jQuery('#true_setup').css('display','none');

			var api_url = jQuery('#api_url').val();
			var user_id = jQuery('#user_id').val();
			var user_pass = jQuery('#user_pass').val();
			var api_pass = jQuery('#api_pass').val();

			var data = {
				'action' : 'check_connection_integria',
				'api_url' : api_url,
				'user_id' : user_id,
				'user_pass' : user_pass,
				'api_pass' : api_pass
			}

			jQuery.post(ajaxurl, data, function(response) {


				if(response != 0){ 
					jQuery('#false_setup').css('display','none');
					jQuery('#loading_setup').css('display','none');
					jQuery('#true_setup').css({'display':'inline' , 'margin-left' : '20px'});
				}
				else{	
					jQuery('#true_setup').css('display','none');
					jQuery('#loading_setup').css('display','none');
					jQuery('#false_setup').css({'display':'inline' , 'margin-left' : '20px'});
				}


			})

				
		})

	}



	function check_api_version(){

		jQuery(document).ready(function($) {


			jQuery("#check_api_version").html('');
			jQuery('#loading_version').css({'display':'inline' , 'margin-left' : '20px'});
			jQuery('#false_version').css('display','none');
			jQuery('#true_version').css('display','none');

			var api_url = jQuery('#api_url').val();
			//api_url= api_url+'?info=version';

			var data = {
				'action' : 'check_api_version',
				'api_url' : api_url		
			}


			jQuery.post(ajaxurl, data, function(response) {


				if(response != 0){ 
					jQuery("#check_api_version").html(response).css('color', 'black');	
					jQuery('#false_version').css('display','none');
					jQuery('#loading_version').css('display','none');
					jQuery('#true_version').css({'display':'inline' , 'margin-left' : '20px'});
				}
				else{	
					jQuery("#check_api_version").html('Type a valid URL.').css('color', 'red');
					jQuery('#true_version').css('display','none');
					jQuery('#loading_version').css('display','none');
					jQuery('#false_version').css({'display':'inline' , 'margin-left' : '20px'});
				}


			})


				
		})

	}

//=== FIN === JQUERY Functions Setup ============================


//=== JQUERY Functions Leads AND Tickets ========================

	// ===== Button toggle for button create/hide form ==============
	function create_toggle(){

		jQuery(document).ready(function($) {

			var data = {
				
			}

			jQuery.post(ajaxurl, data, function(response) {
				
				jQuery('#create_toggle').toggle();
				jQuery('#create_toggle_tickets').toggle();

				var display = jQuery('#create_toggle').css('display');
				var display2 = jQuery('#create_toggle_tickets').css('display');

				if (display == 'none' || display2 == 'none') {
					jQuery('#create_form_data').val('Create');
					jQuery('#create_form_data_tickets').val('Create Ticket');
				}
				else{
					jQuery('#create_form_data').val('Hide Creation Form');
				    jQuery('#create_form_data_tickets').val('Hide Creation Form');
				}

			})

		})


	}
	// ===== END === Button toggle for button create/hide form =====

//=== END === JQUERY Functions Leads AND Tickets ===============



// ===== JQUERY LEADS Functions ============================== 	

	// ===== DELETE rows from the table form_data ==================
	function delete_form_data(id_input_table){

		jQuery(document).ready(function($) {

			var data = {
				'action': 'delete_row_form_data',
				'id_input_table' : id_input_table,
			}

	
			jQuery.post(ajaxurl, data, function(response) {
				
				if(response){
					jQuery('#id_fila_'+id_input_table).hide();
				}

			})

		})


	}

	// ===== END === DELETE rows from the table form_data ===========


	// ===== LOAD FIELDS from the LEADS FORM =======================
	function load_values(var_id_form) {

		jQuery(document).ready(function($) {

			var data = {
				'variable_id_form': var_id_form
			}

			jQuery.post(ajaxurl, data, function(response) {
				//console.log('llamada ajax' + var_id_form);
				
			})

			var obj = jQuery.parseJSON( jQuery("#hidden_leads").val() );
		
			var select = jQuery('[name="options[foo]"]');
			var select1 = jQuery('#name');		
			var select2 = jQuery('#email');
			var select3 = jQuery('#phone');
			var select4 = jQuery('#company');
			var select5 = jQuery('#know_us');
			var select6 = jQuery('#message-l');					

			if(select.prop) {
				var options1 = select1.prop('options');
				var options2 = select2.prop('options');
				var options3 = select3.prop('options');
				var options4 = select4.prop('options');
				var options5 = select5.prop('options');
				var options6 = select6.prop('options');
			}
			else {
				var options1 = select1.atrr('options');
				var options2 = select2.atrr('options');
				var options3 = select3.atrr('options');
				var options4 = select4.atrr('options');
				var options5 = select5.atrr('options');
				var options6 = select6.atrr('options');
			}

			jQuery('option', select).remove();


			for (var i in obj) {
					
			    if(parseInt(obj[i]) === parseInt(var_id_form)){

			      	options1[options1.length] = new Option(i, i);
			      	options2[options2.length] = new Option(i, i);
			      	options3[options3.length] = new Option(i, i);
			      	options4[options4.length] = new Option(i, i);
			      	options5[options5.length] = new Option(i, i);
			      	options6[options6.length] = new Option(i, i);			

			      }
	     	}
			  
			select1.val(options1);
			select2.val(options2);
			select3.val(options3);
			select4.val(options4);
			select5.val(options5);
			select6.val(options6);
			
		})

	} 

	// ===== END === LOAD FIELDS from the LEADS FORM ===============


	// ===== GET FIELDS from the LEADS FORM ========================


	function get_data_form(){
		

		jQuery(document).ready(function($) {
			var id_form = jQuery('#id_form').val();
			var name_form = jQuery.trim(jQuery('#id_form option:selected').text());

			var name = jQuery('#name').val();
			var email = jQuery('#email').val();
			var phone = jQuery('#phone').val();
			var company = jQuery('#company').val();
			var know_us = jQuery('#know_us').val();
			var message = jQuery('#message-l').val();
			var language = jQuery('#language').val();
			var id_product = jQuery('#id_product').val();
			var tags = jQuery('#tags').val();

			// null : for select option
			//   '' : for input type text and select option when there isn't any form selected
			if( name != '' && email != '' && phone != '' && company != '' && know_us != '' &&  message != '' && 
				language != '' && id_product != '' && 
				name != null && email != null && phone != null && company != null && know_us != null &&  message != null && 
				language != null && id_product != null ){ 


				var valid_languages_values = ['de','en_GB','es','fr','pl','ru','zh_CN'];	

				if( jQuery.inArray(language,valid_languages_values) === -1 ){
					jQuery('#show-message').text('The valid values for Language are: de, en_GB, es, fr, pl, ru, zh_CN.').addClass('error').css('color', 'red');
				}
				else if(!jQuery.isNumeric(id_product)){
					jQuery('#show-message').text('ID Product is not a number.').addClass('error').css('color', 'red');
				}
				else{
					

					var data = {
						'action': 'set_data_form',
						'id_form' : id_form,
						'name_form' : name_form,

						'name' : name,
						'email' : email,
						'phone' : phone,
						'company' : company,
						'know_us' : know_us,
						'message' : message,
						'language' : language,
						'id_product' : id_product,
						'tags' : tags
					}


					jQuery.post(ajaxurl, data, function(response) {
							
						//alert('Got this from the server: ' + response);

						if(response != 1){
							//console.log('duplicate');
							jQuery('#show-message').text('Error. Check if your form already exists in the table.').addClass('error').css('color', 'red');
						}
						else{
							//console.log('correct');
							jQuery('#show-message').text('It has been inserted successfully.').addClass('updated').css('color', 'green');
							location.reload(true);

						}



					})


				}


			}
			else{

				jQuery('#show-message').text('You can not leave any empty fields.').addClass('error').css('color', 'red');

			}


		})


	}

	// ===== END === GET FIELDS from the LEADS FORM ================

	
// ===== END === JQUERY LEADS Functions ====================== 



// ===== JQUERY TICKETS Functions ============================ 

	// ===== DELETE rows from the table form_data_tickets ==============
	function delete_form_data_tickets(id_input_table){

		jQuery(document).ready(function($) {

			var data = {
				'action': 'delete_row_form_data_tickets',
				'id_input_table' : id_input_table,
			}

	
			jQuery.post(ajaxurl, data, function(response) {
					
				if(response){
					jQuery('#id_fila_tickets_'+id_input_table).hide();
				}

			})


		})

	}
	// ===== END === DELETE rows from the table form_data_tickets ======


	// ===== LOAD FIELDS from the TICKETS FORM =========================
	function load_values_tickets(var_id_form) {

		jQuery(document).ready(function($) {

			var data = {
				'variable_id_form': var_id_form
			}

			jQuery.post(ajaxurl, data, function(response) {
				//console.log('llamada ajax' + var_id_form);
				
			})

			var obj = jQuery.parseJSON( jQuery("#hidden_tickets").val() );

			var select = jQuery('[name="options[foo-t]"]');
			var select1 = jQuery('#title');		
			var select2 = jQuery('#id_group');
			var select3 = jQuery('#priority');
			var select4 = jQuery('#description');	

			if(select.prop) {
				var options1 = select1.prop('options');
				var options2 = select2.prop('options');
				var options3 = select3.prop('options');
				var options4 = select4.prop('options');


			}
			else {
				var options1 = select1.atrr('options');
				var options2 = select2.atrr('options');
				var options3 = select3.atrr('options');
				var options4 = select4.atrr('options');
			}

			jQuery('option', select).remove(); 
			

			for (var i in obj) {
						
			    if(parseInt(obj[i]) === parseInt(var_id_form)){
			      	options1[options1.length] = new Option(i, i);
			      	options2[options2.length] = new Option(i, i);
			      	options3[options3.length] = new Option(i, i);
			      	options4[options4.length] = new Option(i, i);								
			      }
	     	}
			  
			
			select1.val(options1);
			select2.val(options2);
			select3.val(options3);
			select4.val(options4);	

		})

	} 
	//===== END === LOAD FIELDS from the TICKETS FORM ==================


	// ===== GET FIELDS from the TICKETS FORM ==========================
	function get_data_form_tickets(){
		
		jQuery(document).ready(function($) {

			var id_form = jQuery('#id_form_tickets').val();
			var name_form = jQuery.trim(jQuery('#id_form_tickets option:selected').text());
	
			
			// If title-static is full, use it
			if(jQuery('#title-static').val().length > 0 && (jQuery('#title').val() == '' || jQuery('#title').val() == null)){	// vacio lleno
				var title = '-';
				var title_value = jQuery('#title-static').val();
			}
			else if (jQuery('#title-static').val().length <= 0 && (jQuery('#title').val() == '' || jQuery('#title').val() == null)) { //vacio vacio
				var title = '';
				var title_value = '';
			}
			else if (jQuery('#title-static').val().length <= 0 && (jQuery('#title').val() != '' || jQuery('#title').val() != null)) { //lleno vacio
				var title = jQuery('#title').val();
				var title_value = '-';
			}
			else if (jQuery('#title-static').val().length > 0 && (jQuery('#title').val() != '' || jQuery('#title').val() != null)) { //lleno lleno
				var title = '-';
				var title_value = jQuery('#title-static').val();
			}
			else{ //??
				var title = '';
				var title_value = '';
			}



			// If id_group-static is full, use it
			if(jQuery('#id_group-static').val().length > 0 && (jQuery('#id_group').val() == '' || jQuery('#id_group').val() == null)){	// vacio lleno
				var id_group = '-';
				var id_group_value = jQuery('#id_group-static').val();
			}
			else if (jQuery('#id_group-static').val().length <= 0 && (jQuery('#id_group').val() == '' || jQuery('#id_group').val() == null)) { //vacio vacio
				var id_group = '';
				var id_group_value = '';
			}
			else if (jQuery('#id_group-static').val().length <= 0 && (jQuery('#id_group').val() != '' || jQuery('#id_group').val() != null)) { //lleno vacio
				var id_group = jQuery('#id_group').val();
				var id_group_value = '-';
			}
			else if (jQuery('#id_group-static').val().length > 0 && (jQuery('#id_group').val() != '' || jQuery('#id_group').val() != null)) { //lleno lleno
				var id_group = '-';
				var id_group_value = jQuery('#id_group-static').val();
			}
			else{ //??
				var id_group = '';
				var id_group_value = '';
			}



			// If priority-static is full, use it
			if(jQuery('#priority-static').val().length > 0 && (jQuery('#priority').val() == '' || jQuery('#priority').val() == null)){	// vacio lleno
				var priority = '-';
				var priority_value = jQuery('#priority-static').val();
			}
			else if (jQuery('#priority-static').val().length <= 0 && (jQuery('#priority').val() == '' || jQuery('#priority').val() == null)) { //vacio vacio
				var priority = '';
				var priority_value = '';
			}
			else if (jQuery('#priority-static').val().length <= 0 && (jQuery('#priority').val() != '' || jQuery('#priority').val() != null)) { //lleno vacio
				var priority = jQuery('#priority').val();
				var priority_value = '-';
			}
			else if (jQuery('#priority-static').val().length > 0 && (jQuery('#priority').val() != '' || jQuery('#priority').val() != null)) { //lleno lleno
				var priority = '-';
				var priority_value = jQuery('#priority-static').val();
			}
			else{ //??
				var priority = '';
				var priority_value = '';
			}



			// If description-static is full, use it
			if(jQuery('#description-static').val().length > 0 && (jQuery('#description').val() == '' || jQuery('#description').val() == null)){	// vacio lleno
				var description = '-';
				var description_value = jQuery('#description-static').val();
				console.log(1);
			}
			else if (jQuery('#description-static').val().length <= 0 && (jQuery('#description').val() == '' || jQuery('#description').val() == null)) { //vacio vacio
				var description = '';
				var description_value = '';
				console.log(2);
			}
			else if (jQuery('#description-static').val().length <= 0 && (jQuery('#description').val() != '' || jQuery('#description').val() != null)) { //lleno vacio
				var description = jQuery('#description').val();
				var description_value = '-';
				console.log(3);
			}
			else if (jQuery('#description-static').val().length > 0 && (jQuery('#description').val() != '' || jQuery('#description').val() != null)) { //lleno lleno
				var description = '-';
				var description_value = jQuery('#description-static').val();
				console.log(4);
			}
			else{ //??
				var description = '';
				var description_value = '';
				console.log(5);
			}
	
			


			if( title != '' && id_group != '' && priority != '' && description != '' && title_value != '' && id_group_value != '' && priority_value != '' && description_value != '' 
				&& title != null && id_group != null && priority != null && description != null
				&& title_value != null && id_group_value != null && priority_value != null && description_value != null ){ 


				var valid_priority_values = ['10','0','1','2','3','4'];	

				if(name_form == '[select form]' ){				
					jQuery('#show-message_tickets').text('Select a form.').addClass('error').css('color', 'red');
				}
				else if(!jQuery.isNumeric(id_group_value) && id_group_value != '-'){
					jQuery('#show-message_tickets').text('ID Group is not a number.').addClass('error').css('color', 'red');
				}
				else if( jQuery.inArray(priority_value,valid_priority_values) === -1 && priority_value != '-'){
					jQuery('#show-message_tickets').text('The valid values for Priority are: 10, 0, 1, 2, 3, y 4.').addClass('error').css('color', 'red');
				}
				else{

					var data = {
						'action': 'set_data_form_tickets',
						'id_form' : id_form,
						'name_form' : name_form,

						'title' : title,
						'id_group' : id_group,
						'priority' : priority,
						'description' : description,

						'title_value' : title_value,
						'id_group_value' : id_group_value,
						'priority_value' : priority_value,
						'description_value' : description_value
					}


					jQuery.post(ajaxurl, data, function(response) {

						//alert('Got this from the server: ' + response);

						if(response != 1){
							//console.log('duplicate');
							jQuery('#show-message_tickets').text('Error. Check if your form already exists in the table.').addClass('error').css('color', 'red');
						}
						else{
							//console.log('correct');
							jQuery('#show-message_tickets').text('It has been inserted successfully.').addClass('updated').css('color', 'green');
							jQuery('#show-message_tickets').submit();
						   	location.reload(true);

						}


					})


				}


			}
			else{

				jQuery('#show-message_tickets').text('You can not leave any empty fields.').addClass('error').css('color', 'red');

			}


		})


	}

	// ===== END === GET FIELDS from the TICKETS FORM ==================

// ===== END === JQUERY TICKETS Functions ====================== 
