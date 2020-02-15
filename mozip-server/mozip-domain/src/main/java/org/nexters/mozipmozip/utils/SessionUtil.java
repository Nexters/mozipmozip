package org.nexters.mozipmozip.utils;

import org.nexters.mozipmozip.user.domain.User;

import javax.servlet.http.HttpSession;

public class SessionUtil {
    public static final String SESSION_KEY = "userInfo";

    public static User getUser(HttpSession session) {
        User loginUser = (User) session.getAttribute(SESSION_KEY);

        if (loginUser == null) {
            throw new IllegalStateException("로그인이 필요합니다");
        }

        return loginUser;
    }

    public static void setUser(HttpSession session, User user) {
        session.setAttribute(SESSION_KEY, user);
    }

    public static void logout(HttpSession session) {
        session.removeAttribute(SESSION_KEY);
    }
}
