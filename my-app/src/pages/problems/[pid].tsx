import Topbar from '@/components/Topbar/Topbar';
import Workspace from '@/components/Workspace/Workspace';
import useHasMounted from '@/hooks/useHasMounted';
import { problems } from '@/utils/problems';
import { Problem } from '@/utils/types/problem';
import React from 'react';

type ProblempageProps = {
    problem:Problem;
};

const Problempage:React.FC<ProblempageProps> = ({problem}) => {
     const hasMounted = useHasMounted();

    if(!hasMounted) return null;
    console.log(problem);
    return (
        
    <div>
        <Topbar problemPage={true}/>
        <Workspace problem={problem} />
    </div>
    );
};
export default Problempage;

// fetch the local data
export async function getStaticPaths() {
    const paths = Object.keys(problems).map((key) => ({
        params:{pid:key},
    }));
    return {
        paths: paths,
        fallback: true,
    };
}
export async function getStaticProps({ params }: { params: { pid: string } }) {
	const { pid } = params;
	const problem = problems[pid];

	if (!problem) {
		return {
			notFound: true,
		};
	}
	problem.handlerFunction = problem.handlerFunction.toString();
	return {
		props: {
			problem
		},
	};
}