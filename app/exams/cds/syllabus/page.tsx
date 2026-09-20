import { ClusterGuidePage, clusterMetadata } from '@/components/cluster-guide-page';
const path = '/exams/cds/syllabus/';
export const metadata = clusterMetadata(path);
export default function Page() { return <ClusterGuidePage path={path} />; }
