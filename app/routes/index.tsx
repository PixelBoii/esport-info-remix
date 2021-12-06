import { useLoaderData } from "remix";
import { app } from "~/firebase.js";
import { getFirestore, collection, getDocs } from 'firebase/firestore'

export async function loader() {
  let db = getFirestore(app);
  let query = await getDocs(collection(db, 'games'));

  return {
    games: query.docs.reduce((docs, e) => ({
      ...docs,
      [e.id]: e.data(),
    }), {}),
  };
}

function CounterStrike({ details }: any) {
  return (
    <div>
      <p className="text-gray-700 text-xl font-bold"> { details.name } </p>
    </div>
  )
}

function Pubg({ details }: any) {
  return (
    <div>
      <p className="text-gray-700 text-xl font-bold"> { details.name } </p>
    </div>
  )
}

function Dota2({ details }: any) {
  return (
    <div>
      <p className="text-gray-700 text-xl font-bold"> { details.name } </p>
    </div>
  )
}

export default function Index() {
  let { games } = useLoaderData();

  return (
    <div>
      <CounterStrike details={games['csgo']} />
      <Pubg details={games['pubg']} />
      <Dota2 details={games['dota-2']} />
    </div>
  );
}
