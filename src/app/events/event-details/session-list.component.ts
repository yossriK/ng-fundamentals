import { Component, Input, OnChanges } from '@angular/core';
import { AuthService } from '../../user/auth.service';
import { ISession } from '../shared/index';
import { VoterService } from './voter.service';

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})

export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    visibleSessions: ISession[] = [];

    /**
     *
     */
    constructor(private authService: AuthService,
        private voterService: VoterService) {
        
    }

    ngOnChanges() {
        if(this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name'
             ? this.visibleSessions.sort(sortByNameAsc)
             : this.visibleSessions.sort(sortByVoteDesc); 
        }
    }

    toggleVote(session: ISession) {
        if(this.userHasVoted(session)) {
            this.voterService.deleteVoter(session, this.authService.currentUser.userName);
        } else {
            this.voterService.addVoter(session, this.authService.currentUser.userName);
        }

        if(this.sortBy === 'votes')
            this.visibleSessions.sort(sortByVoteDesc);
    }

    userHasVoted(session: ISession): boolean {
        return this.voterService.userHasVoted(session, this.authService.currentUser.userName);
    }

    filterSessions(filter) {
        if(filter === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        } else {
            this.visibleSessions = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filter;
            });
        }
    }
}

function sortByNameAsc(s1: ISession, s2: ISession) {
    if(s1.name > s2.name) return 1
    else if(s1.name === s2.name) return 0
    else return -1;
}

function sortByVoteDesc(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length;
}