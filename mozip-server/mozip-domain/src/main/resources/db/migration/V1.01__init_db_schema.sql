CREATE TABLE `notice`
(
    `notice_id`          bigint(20)                           NOT NULL AUTO_INCREMENT,
    `created_at`         datetime(6)                          NOT NULL,
    `created_by`         varchar(64) COLLATE utf8_unicode_ci           DEFAULT NULL,
    `deleted`            bit(1)                               NOT NULL DEFAULT b'0',
    `last_modified_at`   datetime(6)                          NOT NULL,
    `last_modified_by`   varchar(64) COLLATE utf8_unicode_ci           DEFAULT NULL,
    `description`        longtext COLLATE utf8_unicode_ci     NOT NULL,
    `display_image_path` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
    `end_date_time`      datetime(6)                          NOT NULL,
    `status`             varchar(255) COLLATE utf8_unicode_ci NOT NULL,
    `start_date_time`    datetime(6)                          NOT NULL,
    `title`              varchar(50) COLLATE utf8_unicode_ci  NOT NULL,
    PRIMARY KEY (`notice_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8
  COLLATE = utf8_unicode_ci;

CREATE TABLE `notice_form`
(
    `notice_form_id`   bigint(20)                           NOT NULL AUTO_INCREMENT,
    `created_at`       datetime(6)                          NOT NULL,
    `created_by`       varchar(64) COLLATE utf8_unicode_ci           DEFAULT NULL,
    `deleted`          bit(1)                               NOT NULL DEFAULT b'0',
    `last_modified_at` datetime(6)                          NOT NULL,
    `last_modified_by` varchar(64) COLLATE utf8_unicode_ci           DEFAULT NULL,
    `occupation`       varchar(255) COLLATE utf8_unicode_ci NOT NULL,
    `notice_id`        bigint(20)                                    DEFAULT NULL,
    PRIMARY KEY (`notice_form_id`),
    KEY `IDX_NOTICE_ID` (`notice_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8
  COLLATE = utf8_unicode_ci;

CREATE TABLE `notice_form_job_type`
(
    `notice_form_id` bigint(20) NOT NULL,
    `job_type`       varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    KEY `IDX_NOTICE_FORM_ID` (`notice_form_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8
  COLLATE = utf8_unicode_ci;

CREATE TABLE `notice_form_question_item`
(
    `notice_form_question_item_id` bigint(20)                           NOT NULL AUTO_INCREMENT,
    `created_at`                   datetime(6)                          NOT NULL,
    `created_by`                   varchar(64) COLLATE utf8_unicode_ci           DEFAULT NULL,
    `deleted`                      bit(1)                               NOT NULL DEFAULT b'0',
    `last_modified_at`             datetime(6)                          NOT NULL,
    `last_modified_by`             varchar(64) COLLATE utf8_unicode_ci           DEFAULT NULL,
    `content`                      longtext COLLATE utf8_unicode_ci     NOT NULL,
    `max_length`                   int(11)                              NOT NULL,
    `question_score`               int(11)                              NOT NULL,
    `title`                        varchar(255) COLLATE utf8_unicode_ci NOT NULL,
    `type`                         varchar(255) COLLATE utf8_unicode_ci NOT NULL,
    `notice_form_id`               bigint(20)                                    DEFAULT NULL,
    PRIMARY KEY (`notice_form_question_item_id`),
    KEY `IDX_NOTICE_FORM_ID` (`notice_form_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8
  COLLATE = utf8_unicode_ci;
