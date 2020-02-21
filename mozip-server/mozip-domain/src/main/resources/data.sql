INSERT INTO `user` (`user_id`, `created_at`, `created_by`, `deleted`, `last_modified_at`, `last_modified_by`, `email`,
                    `is_admin`, `name`, `password`)
VALUES (1, '2020-02-16 04:57:25.249000', 'dudwl7676', 0, '2020-02-16 04:57:25.249000', 'dudwl7676', 'admin@admin.com',
        1,
        '라영지', '$2a$10$3INCAlxuna7zp2tcqftacOBDG6.Ev4R508/Gi.p.hecAJcNkM31O.');


INSERT INTO `notice` (`notice_id`, `created_at`, `created_by`, `deleted`, `last_modified_at`, `last_modified_by`,
                      `description`, `display_image_path`, `document_end_date`, `document_start_date`,
                      `interview_end_date`, `interview_start_date`, `notice_end_date`, `status`, `title`, `user_id`)
VALUES (1, '2020-02-16 05:06:32.602000', 'dudwl7676', 0, '2020-02-16 05:06:32.602000', 'dudwl7676', '모집공고공고',
        'https://s.pstatic.net/static/www/mobile/edit/2020/0214/mobile_162039334130.jpg',
        '2020-02-15', '2020-02-15', '2020-02-15', '2020-02-15', '2020-02-15', 'PUBLISHED', '넥스터즈 17기 회원 모집', 1);


INSERT INTO `notice_form` (`notice_form_id`, `created_at`, `created_by`, `deleted`, `last_modified_at`,
                           `last_modified_by`, `occupation`, `notice_id`)
VALUES (1, '2020-02-16 05:06:32.624000', 'dudwl7676', 0, '2020-02-16 05:06:32.624000', 'dudwl7676', 'COMMON', 1);


INSERT INTO `notice_form_job_type` (`notice_form_id`, `job_type`)
VALUES (1, 'FRONT');

INSERT INTO `notice_form_job_type` (`notice_form_id`, `job_type`)
VALUES (1, 'SERVER');


INSERT INTO `notice_form_question_item` (`notice_form_question_item_id`, `created_at`, `created_by`, `deleted`,
                                         `last_modified_at`, `last_modified_by`, `content`, `max_length`,
                                         `question_score`, `title`, `type`, `notice_form_id`)
VALUES (1, '2020-02-16 05:06:32.633000', 'dudwl7676', 0, '2020-02-16 05:06:32.633000', 'dudwl7676', '너는', 500, 100,
        '너는 누구입니까', 'LINK', 1);


INSERT INTO `resume` (`resume_id`, `created_at`, `created_by`, `deleted`, `last_modified_at`, `last_modified_by`,
                      `blog_url`, `email`, `github_url`, `name`, `notice_id`, `occupation`, `phone_number`,
                      `portfolio_url`, `job`, `state`, `user_id`)
VALUES (1, '2020-02-16 05:07:54.006000', 'dudwl7676', 0, '2020-02-16 05:07:54.006000', 'dudwl7676',
        'https://hzoou.tistory.com/', 'dudwl7676@naver.com',
        'hzoou', '라영지', 1, 'PROGRAMMER', '010-1234-5678', 'https://hzoou.tistory.com/', 'STUDENT', 'REGISTRATION', 1);


INSERT INTO `resume_answer_item` (`resume_answer_item_id`, `created_at`, `created_by`, `deleted`, `last_modified_at`,
                                  `last_modified_by`, `question_no`, `answer`, `notice_form_question_item_id`, `resume_id`)
VALUES (1, '2020-02-16 05:07:54.017000', 'dudwl7676', 0, '2020-02-16 05:07:54.017000', 'dudwl7676', 1, '안녕~', 1, 1);


INSERT INTO `resume_job_type` (`resume_id`, `job_type`)
VALUES (1, 'string');
