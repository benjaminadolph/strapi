'use strict';

/**
 * openinghour service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::openinghour.openinghour');
