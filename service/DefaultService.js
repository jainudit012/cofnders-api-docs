'use strict';


/**
 * User Applies for a particular Fund
 *
 * authorization String JWT token set in header
 * fundId String Id of the Fund that is to be applied for
 * body Body_3 The Application form in the request body.
 * returns inline_response_200_25
 **/
exports.fundsApplyFundIdPOST = function(authorization,fundId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{error=false, msg=Successfully Recorded Your Response, application={companyValuation=50000000, createdBy={_id=5c9efdde0bb9defc9c218c65, firstName=Udit, lastName=Jain, email=jainudit.012@gmail.com, emailVerified=true, profilePicture=https://media.licdn.com/dms/image/C5103AQG_1EUajUCTXg/profile-displayphoto-shrink_100_100/0?e=1559174400&v=beta&t=WQDJMxQCMYLl4rJ2yYszirYi-rVnd2q1xvtD5greIyY, fullName=Udit Jain, sub=linkedin|oP4sPrYxft, purpose=this is the new purpose 2.0, brief=my brief, isAdmin=false, isActive=true, createdAt=2019-03-30T05:25:50.413Z, updatedAt=2019-04-06T09:31:23.942Z}, fund={_id=5cac89a668367698b0333601, investorType=ANGEL_NETWORK, fundName=VISION Fund, preferredStartupStage=MVP, createdBy={_id=5c9efdde0bb9defc9c218c65, firstName=Udit, lastName=Jain, email=jainudit.012@gmail.com, emailVerified=true, profilePicture=https://media.licdn.com/dms/image/C5103AQG_1EUajUCTXg/profile-displayphoto-shrink_100_100/0?e=1559174400&v=beta&t=WQDJMxQCMYLl4rJ2yYszirYi-rVnd2q1xvtD5greIyY, fullName=Udit Jain, sub=linkedin|oP4sPrYxft, purpose=this is the new purpose 2.0, brief=my brief, isAdmin=true, isActive=true, createdAt=2019-03-30T05:25:50.413Z, updatedAt=2019-04-06T09:31:23.942Z}, isApproved=true, linkedInProfile=www.linkedin.com/?profile=jdkwe99jdow, contact=9090909078, createdAt=2019-04-09T12:01:42.163Z, updatedAt=2019-04-09T12:02:19.625Z}, fundingAmount=1000000, message=some message for the investor, project={_id=5ca48422b7b102e96f3fae9b, projectName=Universe's Model, projectNature=SERVICE, sector=EDUCATION, startupStage=IDEA, teamSize=10, acceptingFunds=true, pitch=my pitch for this project that will make it a success., problemSolvingDescription=my description, createdBy={_id=5c9efdde0bb9defc9c218c65, firstName=Udit, lastName=Jain, email=jainudit.012@gmail.com, emailVerified=true, profilePicture=https://media.licdn.com/dms/image/C5103AQG_1EUajUCTXg/profile-displayphoto-shrink_100_100/0?e=1559174400&v=beta&t=WQDJMxQCMYLl4rJ2yYszirYi-rVnd2q1xvtD5greIyY, fullName=Udit Jain, sub=linkedin|oP4sPrYxft, purpose=my purpose is this?, brief=my brief, isAdmin=true, isFormFilled=true, isActive=true, createdAt=2019-03-30T05:25:50.413Z, updatedAt=2019-04-01T09:38:11.109Z}, isApproved=true, createdByName=Udit Jain, projectApprovalStatus=Approved, createdAt=2019-04-03T10:00:02.116Z, updatedAt=2019-04-09T13:49:35.032Z, approvedAt=2019-04-05T09:15:52.656Z}, pdfLink=https://upload-pdf-cofnders.s3.ap-southeast-1.amazonaws.com/hqtRpI82scB5YGcsoVG.pdf, _id=5cadedcb82c80ab77f18b0de}}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Approves the Fund if the User is Admin
 *
 * authorization String JWT token set in header
 * fundId String Id of the Fund that is to be applied for
 * returns inline_response_200_26
 **/
exports.fundsApproveFundIdPUT = function(authorization,fundId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{error=false, msg=Successfully Approved the Fund!, fund={_id=5cade07b3b9bf3b6d8270fe7, investorType=INCUBATOR, preferredStartupStage=MVP, createdBy={_id=5c9efdde0bb9defc9c218c65, firstName=Udit, lastName=Jain, email=jainudit.012@gmail.com, emailVerified=true, profilePicture=https://media.licdn.com/dms/image/C5103AQG_1EUajUCTXg/profile-displayphoto-shrink_100_100/0?e=1559174400&v=beta&t=WQDJMxQCMYLl4rJ2yYszirYi-rVnd2q1xvtD5greIyY, fullName=Udit Jain, sub=linkedin|oP4sPrYxft, purpose=this is the new purpose 2.0, brief=my brief, isAdmin=false, isActive=true, createdAt=2019-03-30T05:25:50.413Z, updatedAt=2019-04-06T09:31:23.942Z}, isApproved=true, linkedInProfile=www.linkedin.com/?profile=2190jkwq, contact=8329829389, createdAt=2019-04-10T12:24:27.931Z, updatedAt=2019-04-10T12:43:03.211Z}}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deletes the fund If user is the Creator
 *
 * authorization String JWT token set in header
 * fundId String Id of the Fund that is to be changed
 * returns inline_response_200_24
 **/
exports.fundsFundIdDELETE = function(authorization,fundId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{error=false, msg=Successfully Removed Your Fund, fund={}}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Edits the Fund Details if user is the creator
 *
 * authorization String JWT token set in header
 * fundId String Id of the Fund that is to be changed
 * fund Fund_1 The Fund Data that is to be changed. (optional)
 * returns inline_response_200_23
 **/
exports.fundsFundIdPUT = function(authorization,fundId,fund) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{error=false, msg=Successfully Updated the Fund, fund={_id=5cade07b3b9bf3b6d8270fe7, investorType=INCUBATOR, preferredStartupStage=MVP, createdBy={_id=5c9efdde0bb9defc9c218c65, firstName=Udit, lastName=Jain, email=jainudit.012@gmail.com, emailVerified=true, profilePicture=https://media.licdn.com/dms/image/C5103AQG_1EUajUCTXg/profile-displayphoto-shrink_100_100/0?e=1559174400&v=beta&t=WQDJMxQCMYLl4rJ2yYszirYi-rVnd2q1xvtD5greIyY, fullName=Udit Jain, sub=linkedin|oP4sPrYxft, purpose=this is the new purpose 2.0, brief=my brief, isAdmin=false, isActive=true, createdAt=2019-03-30T05:25:50.413Z, updatedAt=2019-04-06T09:31:23.942Z}, isApproved=false, linkedInProfile=www.linkedin.com/?profile=2190jkwq, contact=8329829389, createdAt=2019-04-10T12:24:27.931Z, updatedAt=2019-04-10T12:24:27.931Z}}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get All the Approved Funds or All Funds if Admin
 *
 * authorization String JWT token set in header
 * limit String Limits number of documents returned (optional)
 * offset String No. of documents to skip (optional)
 * sector String  (optional)
 * investorType String  (optional)
 * returns inline_response_200_20
 **/
exports.fundsGET = function(authorization,limit,offset,sector,investorType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{error=false, funds=[{_id=5bfc14f6f3510c0308f63005, investorType=INDIVIDUAL_INVESTOR, fundName=Rahul's Test Fund, sector=FOOD, preferredStartupStage=MVP, fundCurrency=INR, fundValue=30000, createdBy=auth0|5bfa6049fd7df44d2a62ce14}, {_id=5cac89a668367698b0333601, investorType=ANGEL_NETWORK, fundName=VISION Fund, preferredStartupStage=MVP, createdBy={_id=5c9efdde0bb9defc9c218c65, firstName=Udit, lastName=Jain, email=jainudit.012@gmail.com, emailVerified=true, profilePicture=https://media.licdn.com/dms/image/C5103AQG_1EUajUCTXg/profile-displayphoto-shrink_100_100/0?e=1559174400&v=beta&t=WQDJMxQCMYLl4rJ2yYszirYi-rVnd2q1xvtD5greIyY, fullName=Udit Jain, sub=linkedin|oP4sPrYxft, purpose=this is the new purpose 2.0, brief=my brief, isAdmin=true, isActive=true, createdAt=2019-03-30T05:25:50.413Z, updatedAt=2019-04-06T09:31:23.942Z}, linkedInProfile=www.linkedin.com/?profile=jdkwe99jdow, contact=9090909078, createdAt=2019-04-09T12:01:42.163Z, updatedAt=2019-04-09T12:02:19.625Z}]}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Creates A new Fund Listing
 *
 * authorization String JWT token set in header
 * fund Fund The Fund Data from the User in request Body.
 * returns inline_response_200_21
 **/
exports.fundsPOST = function(authorization,fund) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{error=false, msg=Fund has been Added. Under Approval, fund={investorType=ANGEL_NETWORK, fundName=Fund Name, preferredStartupStage=MVP, createdBy={_id=5c9efdde0bb9defc9c218c65, firstName=Udit, lastName=Jain, email=jainudit.012@gmail.com, emailVerified=true, profilePicture=https://media.licdn.com/dms/image/C5103AQG_1EUajUCTXg/profile-displayphoto-shrink_100_100/0?e=1559174400&v=beta&t=WQDJMxQCMYLl4rJ2yYszirYi-rVnd2q1xvtD5greIyY, fullName=Udit Jain, sub=linkedin|oP4sPrYxft, purpose=this is the new purpose 2.0, brief=my brief, isAdmin=false, isActive=true, createdAt=2019-03-30T05:25:50.413Z, updatedAt=2019-04-06T09:31:23.942Z}, isApproved=false, linkedInProfile=www.linkedin.com/?profile=2190jkwq, contact=8329829389, createdAt=2019-04-10T12:24:27.931Z, updatedAt=2019-04-10T12:24:27.931Z, _id=5cade07b3b9bf3b6d8270fe7}}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Gets List Of fund Created by the User
 *
 * authorization String JWT token set in header
 * userId String User Id whose Projects Are to be shown
 * limit String Limits number of documents returned (optional)
 * offset String No. of documents to skip (optional)
 * sector String  (optional)
 * investorType String  (optional)
 * returns inline_response_200_22
 **/
exports.fundsUserIdGET = function(authorization,userId,limit,offset,sector,investorType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{error=false, funds=[{_id=5cac785249b2d991ef647c2e, investorType=FAMILY, fundName=BASIC funds, preferredStartupStage=IDEA, createdBy={_id=5c9efdde0bb9defc9c218c65, firstName=Udit, lastName=Jain, email=jainudit.012@gmail.com, emailVerified=true, profilePicture=https://media.licdn.com/dms/image/C5103AQG_1EUajUCTXg/profile-displayphoto-shrink_100_100/0?e=1559174400&v=beta&t=WQDJMxQCMYLl4rJ2yYszirYi-rVnd2q1xvtD5greIyY, fullName=Udit Jain, sub=linkedin|oP4sPrYxft, purpose=this is the new purpose 2.0, brief=my brief, isAdmin=true, isActive=true, createdAt=2019-03-30T05:25:50.413Z, updatedAt=2019-04-06T09:31:23.942Z}, isApproved=false, linkedInProfile=www.linkedin.com/?profile=0e-02lkdlw, contact=8329482384, createdAt=2019-04-09T10:47:46.626Z, updatedAt=2019-04-09T10:47:46.626Z}, {_id=5cac89a668367698b0333601, investorType=ANGEL_NETWORK, fundName=VISION Fund, preferredStartupStage=MVP, createdBy={_id=5c9efdde0bb9defc9c218c65, firstName=Udit, lastName=Jain, email=jainudit.012@gmail.com, emailVerified=true, profilePicture=https://media.licdn.com/dms/image/C5103AQG_1EUajUCTXg/profile-displayphoto-shrink_100_100/0?e=1559174400&v=beta&t=WQDJMxQCMYLl4rJ2yYszirYi-rVnd2q1xvtD5greIyY, fullName=Udit Jain, sub=linkedin|oP4sPrYxft, purpose=this is the new purpose 2.0, brief=my brief, isAdmin=true, isActive=true, createdAt=2019-03-30T05:25:50.413Z, updatedAt=2019-04-06T09:31:23.942Z}, isApproved=true, linkedInProfile=www.linkedin.com/?profile=jdkwe99jdow, contact=9090909078, createdAt=2019-04-09T12:01:42.163Z, updatedAt=2019-04-09T12:02:19.625Z}]}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Gets the Latest 3 Approved Projects
 *
 * authorization String JWT token set in header (optional)
 * returns inline_response_200_13
 **/
exports.ideasGET = function(authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{error=false, trending=[]}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Gets All Opportunities from Database
 *
 * authorization String JWT token set in header (optional)
 * limit String Limits number of documents returned (optional)
 * offset String No. of documents to skip (optional)
 * sector String  (optional)
 * projectStage String  (optional)
 * returns inline_response_200_14
 **/
exports.opportunitiesGET = function(authorization,limit,offset,sector,projectStage) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{error=false, opportunities=[{_id=5c63f50940f3e80874432194, projectId=5c63f42940f3e80874432193, requirement=IDEA_VALIDATION, specifics=https://www.linkedin.com/in/rahul-mamgain-70442521/}, {_id=5ca74add1731502cf285c8be, project={_id=5ca711af292627172e67c52e, projectName=Statistics, pitch=this product is amazing, isApproved=true, createdByName=Udit Jain, projectApprovalStatus=Approved, createdAt=2019-04-05T08:28:31.482Z, updatedAt=2019-04-05T12:32:24.720Z, approvedAt=2019-04-05T09:02:46.910Z}, requirement=IDEA_VALIDATION, createdBy={_id=5c9efdde0bb9defc9c218c65, email=jainudit.012@gmail.com, profilePicture=https://media.licdn.com/dms/image/C5103AQG_1EUajUCTXg/profile-displayphoto-shrink_100_100/0?e=1559174400&v=beta&t=WQDJMxQCMYLl4rJ2yYszirYi-rVnd2q1xvtD5greIyY, fullName=Udit Jain, isActive=true, createdAt=2019-03-30T05:25:50.413Z, updatedAt=2019-04-05T08:21:25.324Z}, createdAt=2019-04-05T12:32:29.137Z, updatedAt=2019-04-08T09:29:41.632Z}, {_id=5cab14fc70095b559d5eda4a, project={_id=5ca48422b7b102e96f3fae9b, projectName=Universe's Model, pitch=my pitch for this project that will make it a success., isApproved=true, createdByName=Udit Jain, projectApprovalStatus=Approved, createdAt=2019-04-03T10:00:02.116Z, updatedAt=2019-04-05T09:15:52.717Z, approvedAt=2019-04-05T09:15:52.656Z}, requirement=SERVICE_PARTNERS_VENDORS, details=some details are changed , createdBy={_id=5c9efdde0bb9defc9c218c65, email=jainudit.012@gmail.com, profilePicture=https://media.licdn.com/dms/image/C5103AQG_1EUajUCTXg/profile-displayphoto-shrink_100_100/0?e=1559174400&v=beta&t=WQDJMxQCMYLl4rJ2yYszirYi-rVnd2q1xvtD5greIyY, fullName=Udit Jain, isActive=true, createdAt=2019-03-30T05:25:50.413Z, updatedAt=2019-04-01T09:38:11.109Z}, createdAt=2019-04-08T09:31:40.155Z, updatedAt=2019-04-08T09:33:22.956Z}]}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Sends Get In Touch Form for Opportunity.
 *
 * authorization String JWT token set in header
 * opportunityId String Id of the Opportunity for which the form is to be sent
 * body Body_2 The Get in Touch Data in request body.
 * returns inline_response_200_19
 **/
exports.opportunitiesGetInTouchOpportunityIdPOST = function(authorization,opportunityId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{error=false, msg=Successfully Notified the Creator.}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deletes the Opportunity.
 *
 * authorization String JWT token set in header
 * opportunityId String Id of the Opportunity that is to be deleted
 * returns inline_response_200_18
 **/
exports.opportunitiesOpportunityIdDELETE = function(authorization,opportunityId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{error=false, msg=Successfully deleted the Opportunity., opportunity={}}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Edits Opportunity if User is the Creator or Admin.
 *
 * authorization String JWT token set in header
 * opportunityId String Id of the Opportunity that is to be changed
 * opportunity Opportunity_1 The Opportunity Data that is to be changed. (optional)
 * returns inline_response_200_17
 **/
exports.opportunitiesOpportunityIdPUT = function(authorization,opportunityId,opportunity) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{error=false, msg=Opportunity Successfully Updated., opportunity={opportunity={_id=5cab14fc70095b559d5eda4a, project={_id=5ca48422b7b102e96f3fae9b, projectName=Universe's Model, projectNature=SERVICE, sector=EDUCATION, startupStage=IDEA, teamSize=10, acceptingFunds=true, pitch=my pitch for this project that will make it a success., problemSolvingDescription=my description, createdBy={_id=5c9efdde0bb9defc9c218c65, firstName=Udit, lastName=Jain, email=jainudit.012@gmail.com, emailVerified=true, profilePicture=https://media.licdn.com/dms/image/C5103AQG_1EUajUCTXg/profile-displayphoto-shrink_100_100/0?e=1559174400&v=beta&t=WQDJMxQCMYLl4rJ2yYszirYi-rVnd2q1xvtD5greIyY, fullName=Udit Jain, sub=linkedin|oP4sPrYxft, purpose=my purpose is this?, brief=my brief, isAdmin=true, isFormFilled=true, isActive=true, createdAt=2019-03-30T05:25:50.413Z, updatedAt=2019-04-01T09:38:11.109Z}, isApproved=true, createdByName=Udit Jain, projectApprovalStatus=Approved, createdAt=2019-04-03T10:00:02.116Z, updatedAt=2019-04-05T09:15:52.717Z, approvedAt=2019-04-05T09:15:52.656Z}, requirement=SERVICE_PARTNERS_VENDORS, details=some details are changed , createdBy={_id=5c9efdde0bb9defc9c218c65, firstName=Udit, lastName=Jain, email=jainudit.012@gmail.com, emailVerified=true, profilePicture=https://media.licdn.com/dms/image/C5103AQG_1EUajUCTXg/profile-displayphoto-shrink_100_100/0?e=1559174400&v=beta&t=WQDJMxQCMYLl4rJ2yYszirYi-rVnd2q1xvtD5greIyY, fullName=Udit Jain, sub=linkedin|oP4sPrYxft, purpose=my purpose is this?, brief=my brief, isAdmin=true, isFormFilled=true, isActive=true, createdAt=2019-03-30T05:25:50.413Z, updatedAt=2019-04-01T09:38:11.109Z}, createdAt=2019-04-08T09:31:40.155Z, updatedAt=2019-04-08T09:32:46.174Z}}}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Creates an Opportunity resource for Logged In User for their approved Projects.
 *
 * projectId String Id of the Approved Project that is to added in Opportunity
 * authorization String JWT token set in header
 * opportunity Opportunity The Opportunity Data.
 * returns inline_response_200_16
 **/
exports.opportunitiesProjectIdPOST = function(projectId,authorization,opportunity) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{error=false, msg=Opportunity for the Project Created, opportunity={project={_id=5ca48422b7b102e96f3fae9b, projectName=Universe's Model, projectNature=SERVICE, sector=EDUCATION, startupStage=IDEA, teamSize=10, acceptingFunds=true, pitch=my pitch for this project that will make it a success., problemSolvingDescription=my description, createdBy={_id=5c9efdde0bb9defc9c218c65, firstName=Udit, lastName=Jain, email=jainudit.012@gmail.com, emailVerified=true, profilePicture=https://media.licdn.com/dms/image/C5103AQG_1EUajUCTXg/profile-displayphoto-shrink_100_100/0?e=1559174400&v=beta&t=WQDJMxQCMYLl4rJ2yYszirYi-rVnd2q1xvtD5greIyY, fullName=Udit Jain, sub=linkedin|oP4sPrYxft, purpose=my purpose is this?, brief=my brief, isAdmin=true, isFormFilled=true, isActive=true, createdAt=2019-03-30T05:25:50.413Z, updatedAt=2019-04-01T09:38:11.109Z}, isApproved=true, createdByName=Udit Jain, projectApprovalStatus=Approved, createdAt=2019-04-03T10:00:02.116Z, updatedAt=2019-04-05T09:15:52.717Z, approvedAt=2019-04-05T09:15:52.656Z}, requirement=SERVICE_PARTNERS_VENDORS, details=some details about this opportunity, createdBy={_id=5c9efdde0bb9defc9c218c65, firstName=Udit, lastName=Jain, email=jainudit.012@gmail.com, emailVerified=true, profilePicture=https://media.licdn.com/dms/image/C5103AQG_1EUajUCTXg/profile-displayphoto-shrink_100_100/0?e=1559174400&v=beta&t=WQDJMxQCMYLl4rJ2yYszirYi-rVnd2q1xvtD5greIyY, fullName=Udit Jain, sub=linkedin|oP4sPrYxft, purpose=my purpose is this?, brief=my brief, isAdmin=true, isFormFilled=true, isActive=true, createdAt=2019-03-30T05:25:50.413Z, updatedAt=2019-04-01T09:38:11.109Z}, createdAt=2019-04-08T09:31:40.155Z, updatedAt=2019-04-08T09:31:40.155Z, _id=5cab14fc70095b559d5eda4a}}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Gets Opportunities from Database of the User
 *
 * userId String Id of the User that is to searched.
 * authorization String JWT token set in header (optional)
 * limit String Limits number of documents returned (optional)
 * offset String No. of documents to skip (optional)
 * sector String  (optional)
 * projectStage String  (optional)
 * returns inline_response_200_15
 **/
exports.opportunitiesUserIdGET = function(userId,authorization,limit,offset,sector,projectStage) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{error=false, opportunities=[{_id=5ca74add1731502cf285c8be, project={_id=5ca711af292627172e67c52e, projectName=Statistics, projectNature=SERVICE, sector=FIN_TECH, startupStage=MVP, teamSize=2, acceptingFunds=true, pitch=this product is amazing, createdBy={_id=5c9efdde0bb9defc9c218c65, firstName=Udit, lastName=Jain, email=jainudit.012@gmail.com, emailVerified=true, profilePicture=https://media.licdn.com/dms/image/C5103AQG_1EUajUCTXg/profile-displayphoto-shrink_100_100/0?e=1559174400&v=beta&t=WQDJMxQCMYLl4rJ2yYszirYi-rVnd2q1xvtD5greIyY, fullName=Udit Jain, sub=linkedin|oP4sPrYxft, purpose=this is the new purpose 2.0, brief=my brief, isAdmin=true, isFormFilled=true, isActive=true, createdAt=2019-03-30T05:25:50.413Z, updatedAt=2019-04-05T08:21:25.324Z}, isApproved=true, createdByName=Udit Jain, projectApprovalStatus=Approved, createdAt=2019-04-05T08:28:31.482Z, updatedAt=2019-04-05T12:32:24.720Z, responseCount=2, approvedAt=2019-04-05T09:02:46.910Z}, requirement=IDEA_VALIDATION, createdBy={_id=5c9efdde0bb9defc9c218c65, firstName=Udit, lastName=Jain, email=jainudit.012@gmail.com, emailVerified=true, profilePicture=https://media.licdn.com/dms/image/C5103AQG_1EUajUCTXg/profile-displayphoto-shrink_100_100/0?e=1559174400&v=beta&t=WQDJMxQCMYLl4rJ2yYszirYi-rVnd2q1xvtD5greIyY, fullName=Udit Jain, sub=linkedin|oP4sPrYxft, purpose=this is the new purpose 2.0, brief=my brief, isAdmin=true, isFormFilled=true, isActive=true, createdAt=2019-03-30T05:25:50.413Z, updatedAt=2019-04-05T08:21:25.324Z}, createdAt=2019-04-05T12:32:29.137Z, updatedAt=2019-04-08T09:29:41.632Z}, {_id=5cab14fc70095b559d5eda4a, project={_id=5ca48422b7b102e96f3fae9b, projectName=Universe's Model, projectNature=SERVICE, sector=EDUCATION, startupStage=IDEA, teamSize=10, acceptingFunds=true, pitch=my pitch for this project that will make it a success., problemSolvingDescription=my description, createdBy={_id=5c9efdde0bb9defc9c218c65, firstName=Udit, lastName=Jain, email=jainudit.012@gmail.com, emailVerified=true, profilePicture=https://media.licdn.com/dms/image/C5103AQG_1EUajUCTXg/profile-displayphoto-shrink_100_100/0?e=1559174400&v=beta&t=WQDJMxQCMYLl4rJ2yYszirYi-rVnd2q1xvtD5greIyY, fullName=Udit Jain, sub=linkedin|oP4sPrYxft, purpose=my purpose is this?, brief=my brief, isAdmin=true, isFormFilled=true, isActive=true, createdAt=2019-03-30T05:25:50.413Z, updatedAt=2019-04-01T09:38:11.109Z}, isApproved=true, createdByName=Udit Jain, projectApprovalStatus=Approved, createdAt=2019-04-03T10:00:02.116Z, updatedAt=2019-04-05T09:15:52.717Z, approvedAt=2019-04-05T09:15:52.656Z}, requirement=SERVICE_PARTNERS_VENDORS, details=some details are changed , createdBy={_id=5c9efdde0bb9defc9c218c65, firstName=Udit, lastName=Jain, email=jainudit.012@gmail.com, emailVerified=true, profilePicture=https://media.licdn.com/dms/image/C5103AQG_1EUajUCTXg/profile-displayphoto-shrink_100_100/0?e=1559174400&v=beta&t=WQDJMxQCMYLl4rJ2yYszirYi-rVnd2q1xvtD5greIyY, fullName=Udit Jain, sub=linkedin|oP4sPrYxft, purpose=my purpose is this?, brief=my brief, isAdmin=true, isFormFilled=true, isActive=true, createdAt=2019-03-30T05:25:50.413Z, updatedAt=2019-04-01T09:38:11.109Z}, createdAt=2019-04-08T09:31:40.155Z, updatedAt=2019-04-08T09:33:22.956Z}]}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Approves Project if User is Admin.
 *
 * authorization String JWT token set in header
 * projectId String Id of the Project that is to be changed
 * approval Status Approval Status Status that is to be set for the Project. (optional)
 * returns inline_response_200_11
 **/
exports.projectsApproveProjectIdPUT = function(authorization,projectId,approvalStatus) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{error=false, project={_id=5ca48422b7b102e96f3fae9b, projectName=Universe's Model, projectNature=SERVICE, sector=EDUCATION, startupStage=IDEA, teamSize=10, pitch=my pitch for this project that will make it a success., acceptingFunds=true, isApproved=false, projectApprovalStatus=IN_REVIEW, problemSolvingDescription=my description, createdByName=Udit Jain, createdAt=2019-04-03T10:00:02.116Z, updatedAt=2019-04-03T10:39:45.165Z}, msg=Successfully Updated Approval Status.}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Gets All the Approved Projects.
 *
 * authorization String JWT token set in header (optional)
 * limit String Limits number of documents returned (optional)
 * offset String No. of documents to skip (optional)
 * sector String  (optional)
 * stage String  (optional)
 * returns inline_response_200_7
 **/
exports.projectsApprovedGET = function(authorization,limit,offset,sector,stage) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{error=false, projects=[{_id=5ca48422b7b102e96f3fae9b, projectName=Universe's Model, projectNature=SERVICE, sector=EDUCATION, startupStage=IDEA, teamSize=10, acceptingFunds=true, pitch=my pitch for this project that will make it a success., problemSolvingDescription=my description, createdBy={_id=5c9efdde0bb9defc9c218c65, firstName=Udit, lastName=Jain, email=jainudit.012@gmail.com, emailVerified=true, profilePicture=https://media.licdn.com/dms/image/C5103AQG_1EUajUCTXg/profile-displayphoto-shrink_100_100/0?e=1559174400&v=beta&t=WQDJMxQCMYLl4rJ2yYszirYi-rVnd2q1xvtD5greIyY, fullName=Udit Jain, sub=linkedin|oP4sPrYxft, purpose=my purpose is this?, brief=my brief, isAdmin=true, isFormFilled=true, isActive=true, createdAt=2019-03-30T05:25:50.413Z, updatedAt=2019-04-01T09:38:11.109Z}, isApproved=true, createdByName=Udit Jain, projectApprovalStatus=Approved, createdAt=2019-04-03T10:00:02.116Z, updatedAt=2019-04-03T10:45:52.752Z, getInTouchFilled=true}, {_id=5ca494686839789fccd3f25b, projectName=Start Universe, projectNature=SERVICE, sector=EDUCATION, startupStage=IDEA, teamSize=10, acceptingFunds=true, pitch=my pitch for this project that will make it a success., problemSolvingDescription=my description, createdBy={_id=5c9efdde0bb9defc9c218c65, firstName=Udit, lastName=Jain, email=jainudit.012@gmail.com, emailVerified=true, profilePicture=https://media.licdn.com/dms/image/C5103AQG_1EUajUCTXg/profile-displayphoto-shrink_100_100/0?e=1559174400&v=beta&t=WQDJMxQCMYLl4rJ2yYszirYi-rVnd2q1xvtD5greIyY, fullName=Udit Jain, sub=linkedin|oP4sPrYxft, purpose=my purpose is this?, brief=my brief, isAdmin=true, isFormFilled=true, isActive=true, createdAt=2019-03-30T05:25:50.413Z, updatedAt=2019-04-01T09:38:11.109Z}, isApproved=true, createdByName=Udit Jain, projectApprovalStatus=Approved, createdAt=2019-04-03T11:09:28.147Z, updatedAt=2019-04-03T11:09:28.147Z, getInTouchFilled=false}]}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Should get All Project if User is Admin.
 *
 * authorization String JWT token set in header
 * limit String Limits number of documents returned (optional)
 * offset String No. of documents to skip (optional)
 * sector String  (optional)
 * projectStage String  (optional)
 * returns inline_response_200_5
 **/
exports.projectsGET = function(authorization,limit,offset,sector,projectStage) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{error=false, projects=[{_id=5c9efdde0bb9defc9c218c65, firstName=Udit, lastName=Jain, email=jainudit.012@gmail.com, emailVerified=true, profilePicture=https://media.licdn.com/dms/image/C5103AQG_1EUajUCTXg/profile-displayphoto-shrink_100_100/0?e=1559174400&v=beta&t=WQDJMxQCMYLl4rJ2yYszirYi-rVnd2q1xvtD5greIyY, fullName=Udit Jain, sub=linkedin|oP4sPrYxft, purpose=my purpose, brief=thi is my brief, isAdmin=true, isFormFilled=true, isActive=true, createdAt=2019-03-30T05:25:50.413Z, updatedAt=2019-03-30T06:25:13.266Z}]}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Sends Get In Touch Form for Project.
 *
 * authorization String JWT token set in header
 * projectId String Id of the Project for ehich the Get in Touch is to be sent
 * body Body_1 The Get in Touch Data in request body.
 * returns inline_response_200_12
 **/
exports.projectsIntouchProjectIdPOST = function(authorization,projectId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{error=false, msg=Successfully sent your Response.}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Creates Project if User is Logged In.
 *
 * authorization String JWT token set in header
 * project Project The Project Data from the User in request Body.
 * returns inline_response_200_6
 **/
exports.projectsPOST = function(authorization,project) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{error=false, project={projectName=Start Universe, projectNature=SERVICE, sector=EDUCATION, startupStage=IDEA, teamSize=10, acceptingFunds=true, pitch=my pitch for this project that will make it a success., problemSolvingDescription=my description, createdBy={_id=5c9efdde0bb9defc9c218c65, firstName=Udit, lastName=Jain, email=jainudit.012@gmail.com, emailVerified=true, profilePicture=https://media.licdn.com/dms/image/C5103AQG_1EUajUCTXg/profile-displayphoto-shrink_100_100/0?e=1559174400&v=beta&t=WQDJMxQCMYLl4rJ2yYszirYi-rVnd2q1xvtD5greIyY, fullName=Udit Jain, sub=linkedin|oP4sPrYxft, purpose=my purpose is this?, brief=my brief, isAdmin=true, isFormFilled=true, isActive=true, createdAt=2019-03-30T05:25:50.413Z, updatedAt=2019-04-01T09:38:11.109Z}, isApproved=false, createdByName=Udit Jain, projectApprovalStatus=ADDED, createdAt=2019-04-03T10:00:02.116Z, updatedAt=2019-04-03T10:00:02.116Z, _id=5ca48422b7b102e96f3fae9b}, msg=New Project Successfully Created.}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deletes the Project if User is creator and project is not Approved or an Admin.
 *
 * authorization String JWT token set in header
 * projectId String Id of the Project that is to be deleted
 * returns inline_response_200_10
 **/
exports.projectsProjectIdDELETE = function(authorization,projectId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{error=false, project={}, msg=Successfully Deleted the Project.}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Edits Project if User is the Creator or Admin.
 *
 * authorization String JWT token set in header
 * projectId String Id of the Project that is to be changed
 * project Project_1 The Project Data that is to be changed. (optional)
 * returns inline_response_200_9
 **/
exports.projectsProjectIdPUT = function(authorization,projectId,project) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{error=false, project={_id=5ca48422b7b102e96f3fae9b, projectName=Universe's Model, projectNature=CAUSE, sector=EDUCATION, startupStage=IDEA, teamSize=10, pitch=my pitch for this project that will make it a success., acceptingFunds=true, isApproved=false, projectApprovalStatus=ADDED, problemSolvingDescription=my description, createdByName=Udit Jain, createdAt=2019-04-03T10:00:02.116Z, updatedAt=2019-04-03T10:00:02.116Z}, msg=Successfully Updated the Project.}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Gets All the Projects of the User.
 *
 * authorization String JWT token set in header
 * userId String User Id whose Projects Are to be shown
 * limit String Limits number of documents returned (optional)
 * offset String No. of documents to skip (optional)
 * sector String  (optional)
 * stage String  (optional)
 * returns inline_response_200_8
 **/
exports.projectsUserIdGET = function(authorization,userId,limit,offset,sector,stage) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{error=false, projects=[{_id=5ca48422b7b102e96f3fae9b, projectName=Universe's Model, projectNature=SERVICE, sector=EDUCATION, startupStage=IDEA, teamSize=10, acceptingFunds=true, pitch=my pitch for this project that will make it a success., problemSolvingDescription=my description, createdBy={_id=5c9efdde0bb9defc9c218c65, firstName=Udit, lastName=Jain, email=jainudit.012@gmail.com, emailVerified=true, profilePicture=https://media.licdn.com/dms/image/C5103AQG_1EUajUCTXg/profile-displayphoto-shrink_100_100/0?e=1559174400&v=beta&t=WQDJMxQCMYLl4rJ2yYszirYi-rVnd2q1xvtD5greIyY, fullName=Udit Jain, sub=linkedin|oP4sPrYxft, purpose=my purpose is this?, brief=my brief, isAdmin=true, isFormFilled=true, isActive=true, createdAt=2019-03-30T05:25:50.413Z, updatedAt=2019-04-01T09:38:11.109Z}, isApproved=false, createdByName=Udit Jain, projectApprovalStatus=IN_REVIEW, createdAt=2019-04-03T10:00:02.116Z, updatedAt=2019-04-03T10:45:52.752Z}, {_id=5ca494686839789fccd3f25b, projectName=Start Universe, projectNature=SERVICE, sector=EDUCATION, startupStage=IDEA, teamSize=10, acceptingFunds=true, pitch=my pitch for this project that will make it a success., problemSolvingDescription=my description, createdBy={_id=5c9efdde0bb9defc9c218c65, firstName=Udit, lastName=Jain, email=jainudit.012@gmail.com, emailVerified=true, profilePicture=https://media.licdn.com/dms/image/C5103AQG_1EUajUCTXg/profile-displayphoto-shrink_100_100/0?e=1559174400&v=beta&t=WQDJMxQCMYLl4rJ2yYszirYi-rVnd2q1xvtD5greIyY, fullName=Udit Jain, sub=linkedin|oP4sPrYxft, purpose=my purpose is this?, brief=my brief, isAdmin=true, isFormFilled=true, isActive=true, createdAt=2019-03-30T05:25:50.413Z, updatedAt=2019-04-01T09:38:11.109Z}, isApproved=false, createdByName=Udit Jain, projectApprovalStatus=ADDED, createdAt=2019-04-03T11:09:28.147Z, updatedAt=2019-04-03T11:09:28.147Z}]}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Gets All Users from Database
 *
 * authorization String JWT token set in header
 * returns inline_response_200
 **/
exports.usersGET = function(authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{error=false, users=[{_id=5c9efdde0bb9defc9c218c65, fullName=Udit Jain, firstName=Udit, lastName=Jain, email=jainudit.012@gmail.com, emailVerified=true, profilePicture=https://media.licdn.com/dms/image/C5103AQG_1EUajUCTXg/profile-displayphoto-shrink_100_100/0?e=1559174400&v=beta&t=WQDJMxQCMYLl4rJ2yYszirYi-rVnd2q1xvtD5greIyY, sub=linkedin|oP4sPrYxft, isAdmin=true, isFormFilled=true, isActive=true, createdAt=1553923550413, updatedAt=1553927113266, brief=my brief, purpose=my purpose}]}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns Profile of the Logged in user.
 *
 * authorization String JWT token set in header
 * returns inline_response_200_3
 **/
exports.usersMeGET = function(authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{error=false, user={_id=5c9efdde0bb9defc9c218c65, firstName=Udit, lastName=Jain, email=jainudit.012@gmail.com, emailVerified=true, profilePicture=https://media.licdn.com/dms/image/C5103AQG_1EUajUCTXg/profile-displayphoto-shrink_100_100/0?e=1559174400&v=beta&t=WQDJMxQCMYLl4rJ2yYszirYi-rVnd2q1xvtD5greIyY, fullName=Udit Jain, sub=linkedin|oP4sPrYxft, purpose=my purpose, brief=my brief, isAdmin=true, isFormFilled=true, isActive=true, createdAt=2019-03-30T05:25:50.413Z, updatedAt=2019-03-30T06:25:13.266Z}, projects=2, opportunities=0, funds=0}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Lets user get a new token
 *
 * body Body data to create the token or a new user
 * returns inline_response_200_2
 **/
exports.usersPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{error=false, token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjOWVmZGRlMGJiOWRlZmM5YzIxOGM2NSIsImlzQWRtaW4iOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiaWF0IjoxNTUzOTM0NTA2LCJleHAiOjE1NTM5NzA1MDZ9.ron2Gh--Jym8p_8Iqu4gbuo6rO1LE8DKzAdrezwIWKY}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Edits the Profile of the Logged In-User.
 *
 * authorization String JWT token set in header
 * user User The user Profile to Edit. (optional)
 * returns inline_response_200_1
 **/
exports.usersPUT = function(authorization,user) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{error=false, user={_id=5c9efdde0bb9defc9c218c65, firstName=Udit, lastName=Jain, email=jainudit.012@gmail.com, emailVerified=true, profilePicture=https://media.licdn.com/dms/image/C5103AQG_1EUajUCTXg/profile-displayphoto-shrink_100_100/0?e=1559174400&v=beta&t=WQDJMxQCMYLl4rJ2yYszirYi-rVnd2q1xvtD5greIyY, fullName=Udit Jain, sub=linkedin|oP4sPrYxft, purpose=my purpose, brief=thi is my brief, isAdmin=true, isFormFilled=true, isActive=true, createdAt=2019-03-30T05:25:50.413Z, updatedAt=2019-03-30T06:25:13.266Z}}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns Profile of the specified User for the Admin.
 *
 * userId String Id of the User that is to searched.
 * authorization String JWT token set in header
 * returns inline_response_200_4
 **/
exports.usersUserIdGET = function(userId,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{error=false, user={_id=5c9efdde0bb9defc9c218c65, firstName=Udit, lastName=Jain, email=jainudit.012@gmail.com, emailVerified=true, profilePicture=https://media.licdn.com/dms/image/C5103AQG_1EUajUCTXg/profile-displayphoto-shrink_100_100/0?e=1559174400&v=beta&t=WQDJMxQCMYLl4rJ2yYszirYi-rVnd2q1xvtD5greIyY, fullName=Udit Jain, sub=linkedin|oP4sPrYxft, purpose=my purpose, brief=my brief, isAdmin=true, isFormFilled=true, isActive=true, createdAt=2019-03-30T05:25:50.413Z, updatedAt=2019-03-30T06:25:13.266Z}}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

