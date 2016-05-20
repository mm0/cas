package org.jasig.cas.web.flow;

import java.util.Calendar;
import java.util.EnumMap;
import java.util.Enumeration;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.validation.constraints.NotNull;

import org.jasig.cas.authentication.Credential;
import org.jasig.cas.services.ServicesManager;
import org.jasig.cas.web.support.WebUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.webflow.action.AbstractAction;
import org.springframework.webflow.execution.Event;
import org.springframework.webflow.execution.RequestContext;

import com.wavity.broker.api.provider.BrokerProvider;
import com.wavity.broker.util.EventAttribute;
import com.wavity.broker.util.EventType;
import com.wavity.broker.util.TopicType;

/**
 * Performs the message producing for CAS login events.
 *
 * @author davidlee
 * 
 */
@Component("producingMessageAction")
public class ProducingMessageAction extends AbstractAction {

    @NotNull
    private final ServicesManager servicesManager;

    /**
     * Initialize the component with an instance of the services manager.
     * @param servicesManager the service registry instance.
     */
    @Autowired
    public ProducingMessageAction(@Qualifier("servicesManager") final ServicesManager servicesManager) {
        this.servicesManager = servicesManager;
    }

    @Override
    protected Event doExecute(final RequestContext context) throws Exception {
		final HttpServletRequest request = WebUtils.getHttpServletRequest(context);

		String tenantId = null;

		if (request != null) {
			tenantId = AuthUtils.extractTenantID(request);
		}

		String test11 = request.getParameter("client_name");
		String test12 = request.getParameter("username");
		Map<String, String[]> test2 = request.getParameterMap();
		Enumeration<String> test3 = request.getParameterNames();
		String[] test41 = request.getParameterValues("client_name");
		String[] test42 = request.getParameterValues("username");
		
		String strtest11 = "request.getParameter(\"client_name\") >> " + test11;
		String strtest12 = "request.getParameter(\"username\") >> " + test12;
		String strtest2 = "request.getParameterMap() >> " + test2;
		String strtest3 = "request.getParameterNames() >> " + test3;
		String strtest41 = "request.getParameterValues(\"client_name\") >> " + test41;
		String strtest42 = "request.getParameterValues(\"username\") >> " + test42;
		
		logger.info(strtest11);
		logger.info(strtest12);
		logger.info(strtest2);
		logger.info(strtest3);
		logger.info(strtest41);
		logger.info(strtest42);
		
		final Credential credential = WebUtils.getCredential(context);

		if ((tenantId == null || "".equals(tenantId)) || credential == null) {
			logger.error("*** Tenant ID can't be empty or null, or credential is not valid ***");
			return error();
		}

		try {
			final BrokerProvider brokerProvider = BrokerProvider.getInstance();
			final EnumMap<EventAttribute, Object> attr = new EnumMap<EventAttribute, Object>(EventAttribute.class);
			attr.put(EventAttribute.MESSAGE, String.format("The user %s logged in successfully", credential.toString()));
			attr.put(EventAttribute.ACTOR_ID, tenantId);
			attr.put(EventAttribute.TIMESTAMP, Long.toString(Calendar.getInstance().getTimeInMillis()));
			attr.put(EventAttribute.IS_NOTIFY_TARGET, true);
			attr.put(EventAttribute.EVENT_RESULT, "success");
			attr.put(EventAttribute.EC_ID, "Test EC ID");
			brokerProvider.publish(TopicType.ADMIN, EventType.EVENT_TYPE_SSO_AUTHENTICATION, attr);
		} catch (final Exception e) {
			logger.error("broker failed to publish event", e);
		}

		return success();
    }
}
