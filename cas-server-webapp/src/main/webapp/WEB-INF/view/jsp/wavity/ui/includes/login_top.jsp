<%--

    Licensed to Apereo under one or more contributor license
    agreements. See the NOTICE file distributed with this work
    for additional information regarding copyright ownership.
    Apereo licenses this file to you under the Apache License,
    Version 2.0 (the "License"); you may not use this file
    except in compliance with the License.  You may obtain a
    copy of the License at the following location:

      http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.

--%>
<!DOCTYPE html>

<%@ page pageEncoding="UTF-8" %>
<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
	
		<title>CAS &#8211; Central Authentication Service</title>
	
		<meta name="_csrf" content="${_csrf.token}"/>
		<meta name="_csrf_header" content="${_csrf.headerName}"/>
	
	    <spring:theme code="standard.custom.css.font-awesome" var="customCssFontAwesome" />
	    <spring:theme code="standard.custom.css.bootstrap" var="customCssBootstrap" />
	    <spring:theme code="standard.custom.css.generic" var="customCssGeneric" />
	    <spring:theme code="standard.custom.css.grey-gadgets" var="customCssGreyGadgets" />
	    <spring:theme code="standard.custom.css.animate" var="customCssAnimate" />
	    <spring:theme code="standard.custom.css.form" var="customCssAnimate" />
	    <spring:theme code="standard.custom.css.style-grey" var="customCssStyleGrey" />
		<link rel="stylesheet" href="<c:url value="${customCssFontAwesome}" />" />
		<link rel="stylesheet" href="<c:url value="${customCssBootstrap}" />" />
		<link rel="stylesheet" href="<c:url value="${customCssGeneric}" />" />
		<link rel="stylesheet" href="<c:url value="${customCssGreyGadgets}" />" />
		<link rel="stylesheet" href="<c:url value="${customCssAnimate}" />" />
		<link rel="stylesheet" href="<c:url value="${customCssForm}" />" />
		<link rel="stylesheet" href="<c:url value="${customCssStyleGrey}" />" />
		<link rel="icon" href="<c:url value="/favicon.ico" />" type="image/x-icon" />
		
		<spring:theme code="cas.javascript.jquery" var="customJsJquery" />
		<spring:theme code="cas.javascript.bootstrap" var="customJsBootstrap" />
		<script type="text/javascript" src="<c:url value="${customJsJquery}" />"></script>
		<script type="text/javascript" src="<c:url value="${customJsBootstrap}" />"></script>
	</head>

	<%-- <body id="cas">
		<div id="container">
			<header>
				<a id="logo" href="http://www.apereo.org" title="<spring:message code="logo.title" />">WIS</a>
				<h1>Central Authentication Service (CAS)</h1>
			</header>
			<div id="content"> --%>
	<body id="style-grey">
		<div id="main" class="main">