import { ClusterGuidePage, clusterMetadata } from '@/components/cluster-guide-page';
const path = '/ssb-gto/individual-obstacles/';
export const metadata = clusterMetadata(path);
export default function Page() { return <ClusterGuidePage path={path} />; }
