import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { JobService } from '../_services/http/job.service';

import { Job } from '../_models/job.model';

@Injectable()
export class EmployerActiveJobsResolve implements Resolve<Job[]> {

  constructor(private jobService: JobService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.jobService.getEmployerJobs('active', { simple: true});
  }
}
