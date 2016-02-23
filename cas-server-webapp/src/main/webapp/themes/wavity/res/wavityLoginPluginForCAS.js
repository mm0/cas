var wavityLoginPluginForCAS = function() {
	console.log("wavityLoginPluginForCAS has been initialized");
	this.pluginHTMLCodes = pluginHTMLCodes;
};

wavityLoginPluginForCAS.prototype.embedLoginPlugin = function(parameters) {
	this.setParameters(parameters);

	this.replaceContainerID();
	this.replaceCASServerURLInForm();
	this.replaceRedirectURLInForm();
	this.putPluginHTMLCodes();
};

wavityLoginPluginForCAS.prototype.setParameters = function(parameters) {
	this.containerID = parameters.containerID;
	this.redirectURL = parameters.redirectURL;
	this.casServerURL = parameters.casServerURL;
};

wavityLoginPluginForCAS.prototype.replaceContainerID = function() {
	this.pluginHTMLCodes = this.pluginHTMLCodes.replace("@containerID@", this.containerID);
};

wavityLoginPluginForCAS.prototype.replaceCASServerURLInForm = function() {
	this.pluginHTMLCodes = this.pluginHTMLCodes.replace("@CASServerURL@", this.casServerURL);
};

wavityLoginPluginForCAS.prototype.replaceRedirectURLInForm = function() {
	this.pluginHTMLCodes = this.pluginHTMLCodes.replace("@redirectURL@", this.redirectURL);
};

wavityLoginPluginForCAS.prototype.putPluginHTMLCodes = function() {
	document.getElementById(this.containerID).innerHTML = this.pluginHTMLCodes; 
};

wavityLoginPluginForCAS.prototype.getContainerID = function() {
	console.log("containerID : " + this.containerID);
};

wavityLoginPluginForCAS.prototype.getRedirectURL = function() {
	console.log("redirectURL : " + this.redirectURL);
};

wavityLoginPluginForCAS.prototype.getCASServerURL = function() {
	console.log("redirectURL : " + this.casServerURL);
};

wavityLoginPluginForCAS.prototype.getCASServerURL = function() {
	console.log("casServerURL : " + this.casServerURL);
};

wavityLoginPluginForCAS.prototype.getPluginHTMLCodes = function() {
	console.log(this.pluginHTMLCodes);
};

wavityLoginPluginForCAS.prototype.putPluginHTMLCodes = function() {
	document.getElementById(this.containerID).innerHTML = this.pluginHTMLCodes; 
};

wavityLoginPluginForCAS.prototype.clickOauthProvider = function(providerImgElement) {
	document.getElementById("loginPlugin_clickedProvider").value = providerImgElement.name;
	document.forms["loginPluginForm"].submit();
};

wavityLoginPluginForCAS.prototype.showLoginPlugin = function() {
	document.getElementsByClassName('loginPlugin_wrapper')[0].style.display = "block";
};

wavityLoginPluginForCAS.prototype.hideLoginPlugin = function() {
	document.getElementsByClassName('loginPlugin_wrapper')[0].style.display = "none";
};

var pluginHTMLCodes = '\
	<div class="loginPlugin_loginLink">\
		<span onclick="wavityLoginPlugin.showLoginPlugin()">LOGIN</span>\
	</div>\
	<form name="loginPluginForm" method="POST" action="@CASServerURL@" class="loginPlugin_form">\
	    <input type="hidden" name="service" value="@redirectURL@" />\
		<input type="hidden" name="auto" value="true" />\
		<input type="hidden" name="chosenProvider" id="loginPlugin_clickedProvider" value=""/>\
	    <div class="loginPlugin_wrapper">\
	        <div class="loginPlugin_socialProviders">\
				<div class="loginPlugin_header">LOGIN WITH</div>\
		        <div class="provider">\
		        	<a><img class="oauth_providers" onclick="wavityLoginPlugin.clickOauthProvider(this)" name="Facebook" src="http://cdn.gigya.com/gs/i/HTMLLogin/FullLogo/facebook_lastlogin_30.png" alt="Facebook"></a>\
		        </div>\
		        <div class="provider">\
		        	<a><img class="oauth_providers" onclick="wavityLoginPlugin.clickOauthProvider(this)" name="Twitter" src="http://cdn.gigya.com/gs/i/HTMLLogin/FullLogo/twitter_lastlogin_30.png" alt="Twitter"></a>\
		        </div>\
		        <div class="provider">\
		        	<a><img class="oauth_providers" onclick="wavityLoginPlugin.clickOauthProvider(this)" name="Google2" src="http://cdn.gigya.com/gs/i/HTMLLogin/FullLogo/googleplus_lastlogin_35.png" alt="Google+"></a>\
		        </div>\
		        <div class="provider">\
		        	<a><img class="oauth_providers" onclick="wavityLoginPlugin.clickOauthProvider(this)" name="LinkedIn2" src="http://cdn.gigya.com/gs/i/HTMLLogin/FullLogo/linkedin_lastlogin_30.png" alt="LinkedIn"></a>\
		        </div>\
	        </div>\
	        <div class="loginPlugin_loginForm">\
				<div class="loginPlugin_header">\
					LOGIN HERE\
					<div class="loginPlugin_closeButton" onclick="wavityLoginPlugin.hideLoginPlugin()">\
						<img src="http://cdn.gigya.com/gs/i/accounts/close_dialog.png">\
					</div>\
				</div>\
		        <div class="loginPlugin_username">\
					<div class="loginPlugin_label">Username : </div>\
					<input type="text" name="username"/>\
				</div>\
		        <div class="loginPlugin_password">\
					<div class="loginPlugin_label">Password : </div>\
					<input type="password" name="password"/>\
				</div>\
		        <!-- <p><input type="submit" value="Login !" /></p> -->\
		        <div>\
					<button type="submit">LOGIN</button>\
				</div>\
	        </div>\
	    </div>\
	</form>';

var wavityLoginPlugin = new wavityLoginPluginForCAS();