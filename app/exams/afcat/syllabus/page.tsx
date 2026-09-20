import { ClusterGuidePage, clusterMetadata } from '@/components/cluster-guide-page';
const path = '/exams/afcat/syllabus/';
export const metadata = clusterMetadata(path);
export default function Page() { return <ClusterGuidePage path={path} />; }
