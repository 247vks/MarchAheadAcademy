import { ClusterGuidePage, clusterMetadata } from '@/components/cluster-guide-page';
const path = '/ssb-gto/lecturette/';
export const metadata = clusterMetadata(path);
export default function Page() { return <ClusterGuidePage path={path} />; }
