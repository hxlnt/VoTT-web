/**
 * Project.js
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
    name: {
      type: 'string',
      required: true
    },
    type: {
      type: 'string',
      required: true,
      enum: ['object-detection', 'image-classification'],
      defaultsTo: 'object-detection'
    },
    labels: {
      type: 'string',
      required: true
    },
    instructionsText: {
      type: 'string',
      required: true
    },
    instructionsImageId: {
      type: 'string',
      required: false
    },

    labelsArray: function() {
      const labels = this.labels;
      if (!labels) return [];
      try {
        return JSON.parse(labels);
      } catch(error) {
        return labels.split(',');
      }
    }

  }
};

