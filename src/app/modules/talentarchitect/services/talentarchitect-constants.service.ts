import { Injectable } from '@angular/core';
import { SharedConstantsService } from '../../../modules/shared/services/shared-constants.service';

@Injectable()
export class TalentArchitectConstantsService extends SharedConstantsService {
    public API_VERSION = '/v1/hrms';
    public SUBSCRIPTIONS_URL = '/assessments/subscriptions';
    public SUCCESSPROFILES_URL= '/successprofiles';

    public getApiVersion() {
        return this.API_VERSION;
    }

    public getAssessmentsSubscriptionsUrl() {
        return this.getAPIUrl(this.SUBSCRIPTIONS_URL);
    }

    public getSuccessprofilesUrl() {
        return this.getAPIUrl(this.SUCCESSPROFILES_URL);
    }
}
