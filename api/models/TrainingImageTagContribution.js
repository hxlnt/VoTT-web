/**
 * TrainingImageTagContribution.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'string',
      primaryKey: true
    },
    tags: {
      type: 'string',
      required: true
    },
    image: {
      model: 'TrainingImage',
      required: true
    },
    user: {
      model: 'User',
      required: true
    },
  }
};

