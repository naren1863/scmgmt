package com.naren.sms.rest;

import com.naren.sms.request.Subject;
import com.naren.sms.service.SubjectService;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("ui/service")
@Api(tags = "SMS Services", produces = "application/json")
public class SMSController
{

    @Autowired
    SubjectService subjectService;

    @Value("${naren.sms.uri}")
    String smsUrl;

    @RequestMapping(value = "/saveSubject", method = RequestMethod.POST, produces = {
            MediaType.APPLICATION_JSON_VALUE }, consumes = { MediaType.APPLICATION_JSON_VALUE })
    @ApiOperation(value = "Save Subject", notes = "Save Subject", response = Object.class)
    @ApiResponses(value = { @ApiResponse(code = 400, message = "Request contained data that was invalid"),
            @ApiResponse(code = 200, message = "Subject Saved"), @ApiResponse(code = 401, message = "Unauthorized"),
            @ApiResponse(code = 403, message = "Forbidden") })
    @ApiImplicitParams(value = {
            @ApiImplicitParam(name = "SubjectData", value = "Subject JSON", required = true, dataType = "Subject", paramType = "body") })
    public ResponseEntity<Subject> saveSubject(@ApiParam(name = "SubjectData") @RequestBody Subject subjectRequest)
    {
        System.out.println("save subject Rest service called!!" + subjectRequest);
        Subject subjectResponse = subjectService.saveSubject(subjectRequest);
        System.out.println("save subject: Response: " + subjectResponse);
        return new ResponseEntity<Subject>(subjectResponse, HttpStatus.OK);
    }
}
