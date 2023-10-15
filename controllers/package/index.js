const {
  httpSuccess, httpInternalServerError, httpNotFound, httpCreated, httpUpdated,
} = require('../../Utils/htttp-response');
const db = require('../../models');

exports.getPackages = async (req, res) => {
  try {
    const { page, limit } = req.query;
    const result = await db.packages.findAndCountAll({
      limit,
      offset: (page * limit) - limit,
    });

    return httpSuccess(res, result);
  } catch (error) {
    return httpInternalServerError(res, {
      message: 'Something went wrong. Please contact your technical support.',
      error_message: error.message,
    });
  }
};

exports.getPackagesById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.packages.findByPk(id);
    if (!result?.id) {
      return httpNotFound(res, {
        error_message: 'package not found',
        value: id,
      });
    }

    return httpSuccess(res, result);
  } catch (error) {
    return httpInternalServerError(res, {
      message: 'Something went wrong. Please contact your technical support.',
      error_message: error.message,
    });
  }
};

exports.postPackage = async (req, res) => {
  try {
    const data = req.body;
    data.created_at = new Date();
    const result = await db.packages.create(data);

    return httpCreated(res, result);
  } catch (error) {
    return httpInternalServerError(res, {
      message: 'Something went wrong. Please contact your technical support.',
      error_message: error.message,
    });
  }
};

exports.putPackage = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    data.updated_at = new Date();

    const exist = await db.packages.findByPk(id);
    if (!exist?.id) {
      return httpNotFound(res, {
        error_message: 'package not found',
        value: id,
        location: 'params',
      });
    }
    const result = await exist.update(data);

    return httpUpdated(res, result);
  } catch (error) {
    return httpInternalServerError(res, {
      message: 'Something went wrong. Please contact your technical support.',
      error_message: error.message,
    });
  }
};

exports.patchPackage = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    data.updated_at = new Date();

    const exist = await db.packages.findByPk(id);
    if (!exist?.id) {
      return httpNotFound(res, {
        error_message: 'package not found',
        value: id,
        location: 'params',
      });
    }
    const result = await exist.update(data);

    return httpUpdated(res, result);
  } catch (error) {
    return httpInternalServerError(res, {
      message: 'Something went wrong. Please contact your technical support.',
      error_message: error.message,
    });
  }
};

exports.deletePackage = async (req, res) => {
  try {
    const { id } = req.params;
    const exist = await db.packages.findByPk(id);
    if (!exist?.id) {
      return httpNotFound(res, {
        error_message: 'package not found',
        value: id,
        location: 'params',
      });
    }
    await exist.destroy();

    return httpSuccess(res, { id });
  } catch (error) {
    return httpInternalServerError(res, {
      message: 'Something went wrong. Please contact your technical support.',
      error_message: error.message,
    });
  }
};
