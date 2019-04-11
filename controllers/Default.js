'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.fundsApplyFundIdPOST = function fundsApplyFundIdPOST (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var fundId = req.swagger.params['fundId'].value;
  var body = req.swagger.params['Body'].value;
  Default.fundsApplyFundIdPOST(authorization,fundId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.fundsApproveFundIdPUT = function fundsApproveFundIdPUT (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var fundId = req.swagger.params['fundId'].value;
  Default.fundsApproveFundIdPUT(authorization,fundId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.fundsFundIdDELETE = function fundsFundIdDELETE (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var fundId = req.swagger.params['fundId'].value;
  Default.fundsFundIdDELETE(authorization,fundId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.fundsFundIdPUT = function fundsFundIdPUT (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var fundId = req.swagger.params['fundId'].value;
  var fund = req.swagger.params['Fund'].value;
  Default.fundsFundIdPUT(authorization,fundId,fund)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.fundsGET = function fundsGET (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  var sector = req.swagger.params['sector'].value;
  var investorType = req.swagger.params['investorType'].value;
  Default.fundsGET(authorization,limit,offset,sector,investorType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.fundsPOST = function fundsPOST (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var fund = req.swagger.params['Fund'].value;
  Default.fundsPOST(authorization,fund)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.fundsUserIdGET = function fundsUserIdGET (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var userId = req.swagger.params['userId'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  var sector = req.swagger.params['sector'].value;
  var investorType = req.swagger.params['investorType'].value;
  Default.fundsUserIdGET(authorization,userId,limit,offset,sector,investorType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.opportunitiesGET = function opportunitiesGET (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  var sector = req.swagger.params['sector'].value;
  var projectStage = req.swagger.params['projectStage'].value;
  Default.opportunitiesGET(authorization,limit,offset,sector,projectStage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.opportunitiesGetInTouchOpportunityIdPOST = function opportunitiesGetInTouchOpportunityIdPOST (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var opportunityId = req.swagger.params['opportunityId'].value;
  var body = req.swagger.params['Body'].value;
  Default.opportunitiesGetInTouchOpportunityIdPOST(authorization,opportunityId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.opportunitiesOpportunityIdDELETE = function opportunitiesOpportunityIdDELETE (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var opportunityId = req.swagger.params['opportunityId'].value;
  Default.opportunitiesOpportunityIdDELETE(authorization,opportunityId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.opportunitiesOpportunityIdPUT = function opportunitiesOpportunityIdPUT (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var opportunityId = req.swagger.params['opportunityId'].value;
  var opportunity = req.swagger.params['Opportunity'].value;
  Default.opportunitiesOpportunityIdPUT(authorization,opportunityId,opportunity)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.opportunitiesProjectIdPOST = function opportunitiesProjectIdPOST (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var authorization = req.swagger.params['Authorization'].value;
  var opportunity = req.swagger.params['Opportunity'].value;
  Default.opportunitiesProjectIdPOST(projectId,authorization,opportunity)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.opportunitiesUserIdGET = function opportunitiesUserIdGET (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  var authorization = req.swagger.params['Authorization'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  var sector = req.swagger.params['sector'].value;
  var projectStage = req.swagger.params['projectStage'].value;
  Default.opportunitiesUserIdGET(userId,authorization,limit,offset,sector,projectStage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectsApproveProjectIdPUT = function projectsApproveProjectIdPUT (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var projectId = req.swagger.params['projectId'].value;
  var approvalStatus = req.swagger.params['Approval Status'].value;
  Default.projectsApproveProjectIdPUT(authorization,projectId,approvalStatus)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectsApprovedGET = function projectsApprovedGET (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  var sector = req.swagger.params['sector'].value;
  var stage = req.swagger.params['stage'].value;
  Default.projectsApprovedGET(authorization,limit,offset,sector,stage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectsGET = function projectsGET (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  var sector = req.swagger.params['sector'].value;
  var projectStage = req.swagger.params['projectStage'].value;
  Default.projectsGET(authorization,limit,offset,sector,projectStage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectsIntouchProjectIdPOST = function projectsIntouchProjectIdPOST (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var projectId = req.swagger.params['projectId'].value;
  var body = req.swagger.params['Body'].value;
  Default.projectsIntouchProjectIdPOST(authorization,projectId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectsPOST = function projectsPOST (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var project = req.swagger.params['Project'].value;
  Default.projectsPOST(authorization,project)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectsProjectIdDELETE = function projectsProjectIdDELETE (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var projectId = req.swagger.params['projectId'].value;
  Default.projectsProjectIdDELETE(authorization,projectId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectsProjectIdPUT = function projectsProjectIdPUT (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var projectId = req.swagger.params['projectId'].value;
  var project = req.swagger.params['Project'].value;
  Default.projectsProjectIdPUT(authorization,projectId,project)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectsUserIdGET = function projectsUserIdGET (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var userId = req.swagger.params['userId'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  var sector = req.swagger.params['sector'].value;
  var stage = req.swagger.params['stage'].value;
  Default.projectsUserIdGET(authorization,userId,limit,offset,sector,stage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersGET = function usersGET (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  Default.usersGET(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersMeGET = function usersMeGET (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  Default.usersMeGET(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersPOST = function usersPOST (req, res, next) {
  var body = req.swagger.params['Body'].value;
  Default.usersPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersPUT = function usersPUT (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var user = req.swagger.params['User'].value;
  Default.usersPUT(authorization,user)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUserIdGET = function usersUserIdGET (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  var authorization = req.swagger.params['Authorization'].value;
  Default.usersUserIdGET(userId,authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
