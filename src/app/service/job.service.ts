import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }

  postjob(data:any,skills:any)
  {
   var loginId=localStorage.getItem('token')
    console.log(loginId);
    
    console.log(data);
    console.log(skills);
    
    
    return this.http.post('http://localhost:8083/job/postJob/post',
    {
      "active": "Y",
      "ctcOffered": data.ctc,
      "jobDescription": data.jobDescription,
      "jobLocation": data.jobLocation,
      "jobTitle": data.jobTitle,
      "jobTypeId": data.jobType,
      "loginId": loginId,
      "salaryPerHour": 0,
      "skillsRequired":skills
    })
  }

  getjobs()
  {
    return this.http.get('http://localhost:8083/job/allJobs/get')
  }

  applyjob(data)
  {
    return this.http.post('http://localhost:8082/job/applyjob/post/',{
      "jobId": data,
      "loginId": localStorage.getItem('token')
    })
  }
  editjob(jobtitle,ctc,jd,JL,JT,sph,skills:any)
  {
   var loginId=localStorage.getItem('token')
    console.log(loginId);
    
    console.log(skills);
    
    return this.http.post('http://localhost:8083/job/editJob/post',
    {
      "active": "yes",
      "ctcOffered": ctc,
      "editJob": true,
      "jobDescription": jd,
      "jobId": 0,
      "jobLocation":JL,
      "jobTitle": jobtitle,
      "jobTypeId": JT,
      "loginId": loginId,
      "salaryPerHour": 0,
      "skillsRequired":skills
    })
  }

  jobapplied()
  {
   let id = localStorage.getItem('token')
    return this.http.post('http://localhost:8082/job/appliedJobs/get/'+id,{})
  }

  seekersapp(id)
  {
    return this.http.get('http://localhost:8083/job/recruiterJobDetails/jobSeekerDetails/'+id)
  }

  acceptjob(jid)
  {
   return this.http.post('http://localhost:8083/job/recruiterJobDetails/acceptOrRejectJobApplication/',{
      "applicationAccepted": "Y",
      "applicationViewed": "string",
      "jobApplicationId": 0,
      "jobId": jid,
      "jobSeekerId": 0,
      "loginId": localStorage.getItem('token')
    })
  }

  rejectjob(jid)
  {
   return this.http.post('http://localhost:8083/job/recruiterJobDetails/acceptOrRejectJobApplication/',{
      "applicationAccepted": "N",
      "applicationViewed": "string",
      "jobApplicationId": 0,
      "jobId": jid,
      "jobSeekerId": 0,
      "loginId": localStorage.getItem('token')
    })
  }

}
