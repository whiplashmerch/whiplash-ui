#!/bin/bash

ECHO='echo '
pwd
DRY_RUN="--dry-run"
if [ -z $1 ]; then
  echo "’DRY_RUN’ variable is not set, and will set it by true by default"
else
  echo DRY_RUN=$1
fi
$ECHO "DRY_RUN value is ${DRY_RUN}"

for branch in $(git branch -a | sed 's/^\s*//' | grep -v 'master$\|main$\|develop$\|development$'); do
   if [[ $branch == remotes/* ]] ;
   then
	    if [[ "$(git log $branch --since "6 months ago" | wc -l)" -eq 0 ]]; 
		then
			    $ECHO "This branch is 6 months old now: ${branch}"
				merge_destination_branch="master"
				merge_source_branch=$branch
				ECHO "Running checking branch is merged from source ${merge_source_branch} to target ${merge_destination_branch}"
				merge_base=$(git merge-base $merge_destination_branch $merge_source_branch)
				merge_source_current_commit=$(git rev-parse $merge_source_branch)
				if [[ $merge_base = $merge_source_current_commit ]];
				then
					$ECHO "Running Deleting ${branch}"
					if [[ "${DRY_RUN}" == "--no-dryrun" ]]; 
					      #echo "${branch}" | sed 's/remotes\/origin\///' | xargs -n 1 git push origin --delete
						  $ECHO "Deleted running deleting ${branch}"
					then
				          $ECHO "Dry running deleting ${branch}"
				    fi
				else
					$ECHO "Ignore branch ${branch} since it's not merged"

				fi				
		else
			echo "Skipping branch less than 6 months: ${branch}"
		fi
	else
        echo "Skipping local branch ${branch}"	
    fi
done
