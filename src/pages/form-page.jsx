import { useState } from "react";
import "../assets/css/form.css";
import "../assets/css/button.css";
import "../assets/css/summary-page.css";
import Logo from "../assets/PAYCONSENT.svg"
import axios from "axios";
import FormData from "form-data";
import {useNavigate } from "react-router-dom";
import { useAccount} from 'wagmi';


const starton = axios.create({
  baseURL: "https://api.starton.io/v3",
  headers:{
	"x-api-key": "sk_live_1758cdcd-5791-4d9a-990f-d1ca77432081",
  }
});

async function uploadFiletoIpfs(file){
  const data = new FormData();
  data.append("file", file, file.name);
  data.append("isSync", true);
  const res = await starton.post("/ipfs/file", data, {
    headers: {
      "x-api-key": "sk_live_1758cdcd-5791-4d9a-990f-d1ca77432081",
      "Content-Type": "multipart/form-data",
    },
  }).then((value) => {
	return (value.data.cid);
  })
}


async function deployContract(type_creator_user, type_other_user, creator_user, other_user, transactionAmount, urls){
	console.log(type_creator_user, type_other_user, creator_user, other_user, transactionAmount, urls);
  const res = await starton.post("/smart-contract/from-bytecode",
	{
		name: "Ethan le bg",
		description: "test 1 from Starton",
		network: "polygon-mumbai",
		signerWallet: "0xf9537238c56cDb32Ef62a8aed2cA8d9d6253efBf",
		speed: "fast",
		bytecode: "60806040523480156200001157600080fd5b50604051620028aa380380620028aa8339818101604052810190620000379190620005eb565b604051806060016040528087600181111562000058576200005762000814565b5b81526020016000600381111562000074576200007362000814565b5b81526020018473ffffffffffffffffffffffffffffffffffffffff16815250600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548160ff021916908360018111156200010057620000ff62000814565b5b021790555060208201518160000160016101000a81548160ff0219169083600381111562000133576200013262000814565b5b021790555060408201518160000160026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050506040518060600160405280866001811115620001a357620001a262000814565b5b815260200160006003811115620001bf57620001be62000814565b5b81526020018573ffffffffffffffffffffffffffffffffffffffff16815250600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548160ff021916908360018111156200024b576200024a62000814565b5b021790555060208201518160000160016101000a81548160ff021916908360038111156200027e576200027d62000814565b5b021790555060408201518160000160026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050508160018190555060008060006101000a81548160ff02191690836003811115620002fc57620002fb62000814565b5b02179055508060008151811062000318576200031762000872565b5b6020026020010151600360006002811062000338576200033762000872565b5b0190805190602001906200034e929190620003a9565b508060018151811062000366576200036562000872565b5b6020026020010151600360016002811062000386576200038562000872565b5b0190805190602001906200039c929190620003a9565b505050505050506200093f565b828054620003b790620007a8565b90600052602060002090601f016020900481019282620003db576000855562000427565b82601f10620003f657805160ff191683800117855562000427565b8280016001018555821562000427579182015b828111156200042657825182559160200191906001019062000409565b5b5090506200043691906200043a565b5090565b5b80821115620004555760008160009055506001016200043b565b5090565b6000620004706200046a84620006cf565b620006a6565b90508083825260208201905082856020860282011115620004965762000495620008d5565b5b60005b85811015620004eb57815167ffffffffffffffff811115620004c057620004bf620008d0565b5b808601620004cf8982620005a1565b8552602085019450602084019350505060018101905062000499565b5050509392505050565b60006200050c6200050684620006fe565b620006a6565b9050828152602081018484840111156200052b576200052a620008da565b5b6200053884828562000772565b509392505050565b6000815190506200055181620008fa565b92915050565b600082601f8301126200056f576200056e620008d0565b5b81516200058184826020860162000459565b91505092915050565b6000815190506200059b8162000914565b92915050565b600082601f830112620005b957620005b8620008d0565b5b8151620005cb848260208601620004f5565b91505092915050565b600081519050620005e58162000925565b92915050565b60008060008060008060c087890312156200060b576200060a620008e4565b5b60006200061b89828a016200058a565b96505060206200062e89828a016200058a565b95505060406200064189828a0162000540565b94505060606200065489828a0162000540565b93505060806200066789828a01620005d4565b92505060a087015167ffffffffffffffff8111156200068b576200068a620008df565b5b6200069989828a0162000557565b9150509295509295509295565b6000620006b2620006c5565b9050620006c08282620007de565b919050565b6000604051905090565b600067ffffffffffffffff821115620006ed57620006ec620008a1565b5b602082029050602081019050919050565b600067ffffffffffffffff8211156200071c576200071b620008a1565b5b6200072782620008e9565b9050602081019050919050565b6000620007418262000748565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156200079257808201518184015260208101905062000775565b83811115620007a2576000848401525b50505050565b60006002820490506001821680620007c157607f821691505b60208210811415620007d857620007d762000843565b5b50919050565b620007e982620008e9565b810181811067ffffffffffffffff821117156200080b576200080a620008a1565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b620009058162000734565b81146200091157600080fd5b50565b600281106200092257600080fd5b50565b620009308162000768565b81146200093c57600080fd5b50565b611f5b806200094f6000396000f3fe60806040526004361061009c5760003560e01c806379e93bf81161006457806379e93bf81461015a5780638507589b1461018357806393f7d5cf146101ae578063d343436f146101ed578063d942bffa1461022a578063fb7e6e2f146102555761009c565b80630ad69e1c146100a15780632777dc73146100cc5780632a43472c146100e85780635ed61af0146101155780636ccc49651461013e575b600080fd5b3480156100ad57600080fd5b506100b661027e565b6040516100c39190611925565b60405180910390f35b6100e660048036038101906100e191906116c6565b610294565b005b3480156100f457600080fd5b506100fd610704565b60405161010c93929190611adb565b60405180910390f35b34801561012157600080fd5b5061013c600480360381019061013791906116c6565b610726565b005b610158600480360381019061015391906116c6565b610b78565b005b34801561016657600080fd5b50610181600480360381019061017c91906116c6565b610dc3565b005b34801561018f57600080fd5b506101986110a5565b6040516101a59190611ac0565b60405180910390f35b3480156101ba57600080fd5b506101d560048036038101906101d091906116c6565b6110af565b6040516101e4939291906118ee565b60405180910390f35b3480156101f957600080fd5b50610214600480360381019061020f91906116c6565b611162565b60405161022191906118d3565b60405180910390f35b34801561023657600080fd5b5061023f6111ce565b60405161024c9190611ac0565b60405180910390f35b34801561026157600080fd5b5061027c600480360381019061027791906116c6565b6111d4565b005b60008060009054906101000a900460ff16905090565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610302576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102f990611a80565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141580156104145750600060018111156103b0576103af611c2e565b5b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff16600181111561041257610411611c2e565b5b145b610453576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044a90611a00565b60405180910390fd5b6001600381111561046757610466611c2e565b5b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160019054906101000a900460ff1660038111156104c9576104c8611c2e565b5b10610509576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050090611980565b60405180910390fd5b6001600381111561051d5761051c611c2e565b5b60056000600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160019054906101000a900460ff1660038111156105e1576105e0611c2e565b5b14610621576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061890611a20565b60405180910390fd5b6001543414610665576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065c90611940565b60405180910390fd5b6001600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160016101000a81548160ff021916908360038111156106cb576106ca611c2e565b5b021790555060016000806101000a81548160ff021916908360038111156106f5576106f4611c2e565b5b02179055504260028190555050565b60008060004760015460008054906101000a900460ff16925092509250909192565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610794576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078b90611a80565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415801561092357506000600181111561084257610841611c2e565b5b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff1660018111156108a4576108a3611c2e565b5b148061092257506001808111156108be576108bd611c2e565b5b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff1660018111156109205761091f611c2e565b5b145b5b610962576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095990611aa0565b60405180910390fd5b6001600381111561097657610975611c2e565b5b60008054906101000a900460ff16600381111561099657610995611c2e565b5b11156109d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ce906119c0565b60405180910390fd5b600060038111156109eb576109ea611c2e565b5b60008054906101000a900460ff166003811115610a0b57610a0a611c2e565b5b1480610a60575060016003811115610a2657610a25611c2e565b5b60008054906101000a900460ff166003811115610a4657610a45611c2e565b5b148015610a5f57504260028054610a5d9190611b23565b105b5b15610b755760006001811115610a7957610a78611c2e565b5b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff166001811115610adb57610ada611c2e565b5b1415610afa578073ffffffffffffffffffffffffffffffffffffffff16ff5b600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b50565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610be6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bdd90611a80565b60405180910390fd5b60026003811115610bfa57610bf9611c2e565b5b60008054906101000a900460ff166003811115610c1a57610c19611c2e565b5b14610c5a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c5190611a60565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614158015610d6b5750600180811115610d0757610d06611c2e565b5b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff166001811115610d6957610d68611c2e565b5b145b610daa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610da1906119a0565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16ff5b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610e31576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e2890611a80565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614158015610f425750600180811115610ede57610edd611c2e565b5b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff166001811115610f4057610f3f611c2e565b5b145b610f81576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f78906119a0565b60405180910390fd5b60006003811115610f9557610f94611c2e565b5b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160019054906101000a900460ff166003811115610ff757610ff6611c2e565b5b14611037576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161102e906119e0565b60405180910390fd5b6001600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160016101000a81548160ff0219169083600381111561109d5761109c611c2e565b5b021790555050565b6000600154905090565b600080600083600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff16600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160019054906101000a900460ff169250925092509193909250565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60015481565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611242576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161123990611a80565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141580156113d157506001808111156112ef576112ee611c2e565b5b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff16600181111561135157611350611c2e565b5b14806113d057506000600181111561136c5761136b611c2e565b5b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff1660018111156113ce576113cd611c2e565b5b145b5b611410576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611407906119a0565b60405180910390fd5b6001600381111561142457611423611c2e565b5b60008054906101000a900460ff16600381111561144457611443611c2e565b5b14611484576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161147b90611a40565b60405180910390fd5b6001600381111561149857611497611c2e565b5b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160019054906101000a900460ff1660038111156114fa576114f9611c2e565b5b1461153a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161153190611960565b60405180910390fd5b6002600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160016101000a81548160ff021916908360038111156115a05761159f611c2e565b5b0217905550600260038111156115b9576115b8611c2e565b5b60056000600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160019054906101000a900460ff16600381111561167d5761167c611c2e565b5b14156116ae5760026000806101000a81548160ff021916908360038111156116a8576116a7611c2e565b5b02179055505b50565b6000813590506116c081611f0e565b92915050565b6000602082840312156116dc576116db611c5d565b5b60006116ea848285016116b1565b91505092915050565b6116fc81611b79565b82525050565b61170b81611bdb565b82525050565b61171a81611bed565b82525050565b600061172d601283611b12565b915061173882611c62565b602082019050919050565b6000611750601083611b12565b915061175b82611c8b565b602082019050919050565b6000611773601f83611b12565b915061177e82611cb4565b602082019050919050565b6000611796601883611b12565b91506117a182611cdd565b602082019050919050565b60006117b9602183611b12565b91506117c482611d06565b604082019050919050565b60006117dc601e83611b12565b91506117e782611d55565b602082019050919050565b60006117ff601683611b12565b915061180a82611d7e565b602082019050919050565b6000611822602683611b12565b915061182d82611da7565b604082019050919050565b6000611845602f83611b12565b915061185082611df6565b604082019050919050565b6000611868601983611b12565b915061187382611e45565b602082019050919050565b600061188b600583611b12565b915061189682611e6e565b602082019050919050565b60006118ae602383611b12565b91506118b982611e97565b604082019050919050565b6118cd81611bd1565b82525050565b60006020820190506118e860008301846116f3565b92915050565b600060608201905061190360008301866116f3565b6119106020830185611711565b61191d6040830184611702565b949350505050565b600060208201905061193a6000830184611702565b92915050565b6000602082019050818103600083015261195981611720565b9050919050565b6000602082019050818103600083015261197981611743565b9050919050565b6000602082019050818103600083015261199981611766565b9050919050565b600060208201905081810360008301526119b981611789565b9050919050565b600060208201905081810360008301526119d9816117ac565b9050919050565b600060208201905081810360008301526119f9816117cf565b9050919050565b60006020820190508181036000830152611a19816117f2565b9050919050565b60006020820190508181036000830152611a3981611815565b9050919050565b60006020820190508181036000830152611a5981611838565b9050919050565b60006020820190508181036000830152611a798161185b565b9050919050565b60006020820190508181036000830152611a998161187e565b9050919050565b60006020820190508181036000830152611ab9816118a1565b9050919050565b6000602082019050611ad560008301846118c4565b92915050565b6000606082019050611af060008301866118c4565b611afd60208301856118c4565b611b0a6040830184611702565b949350505050565b600082825260208201905092915050565b6000611b2e82611bd1565b9150611b3983611bd1565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611b6e57611b6d611bff565b5b828201905092915050565b6000611b8482611bb1565b9050919050565b6000819050611b9982611ee6565b919050565b6000819050611bac82611efa565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000611be682611b8b565b9050919050565b6000611bf882611b9e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600080fd5b7f4973206e6f7420676f6f6420616d6f756e740000000000000000000000000000600082015250565b7f416c72656164792076616c696461746500000000000000000000000000000000600082015250565b7f74686520636f6e74726163742068617320616c7265616479207369676e656400600082015250565b7f596f7520617265206e6f74207468652072656365697665720000000000000000600082015250565b7f63616e6e6f742063616e63656c206120636f6d706c65746520636f6e7472616360008201527f7400000000000000000000000000000000000000000000000000000000000000602082015250565b7f74686520636f6e747261637420697320616c7265616479207369676e65640000600082015250565b7f596f7520617265206e6f74207468652073656e64657200000000000000000000600082015250565b7f74686520636f6e7472616374206f66206f746865722073696465206973206e6f60008201527f74207369676e0000000000000000000000000000000000000000000000000000602082015250565b7f53746174757320636f6e7472616374206973206e6f74207369676e206f72206160008201527f6c72656164792076616c69646174650000000000000000000000000000000000602082015250565b7f436f6e7472616374206973206e6f7420636f6d706c6574656400000000000000600082015250565b7f4572726f72000000000000000000000000000000000000000000000000000000600082015250565b7f596f7520617265206e6f7420616c6c6f77656420746f2075736520636f6e747260008201527f6163740000000000000000000000000000000000000000000000000000000000602082015250565b60048110611ef757611ef6611c2e565b5b50565b60028110611f0b57611f0a611c2e565b5b50565b611f1781611b79565b8114611f2257600080fd5b5056fea26469706673582212207bc9a279c29a52bf840240a618a9db34dabb578572bc369ce52c575d5af5104064736f6c63430008070033",
		abi: [
			{
				"inputs": [
					{
						"internalType": "enum PayConsent.user_type",
						"name": "t_creator_user",
						"type": "uint8"
					},
					{
						"internalType": "enum PayConsent.user_type",
						"name": "t_other_user",
						"type": "uint8"
					},
					{
						"internalType": "address",
						"name": "creator_user",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "other_user",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "_transactionAmount",
						"type": "uint256"
					},
					{
						"internalType": "string[]",
						"name": "_urls",
						"type": "string[]"
					}
				],
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "_pers",
						"type": "address"
					}
				],
				"name": "ClaimMoney",
				"outputs": [],
				"stateMutability": "payable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "_pers",
						"type": "address"
					}
				],
				"name": "ValidateContract",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "_pers",
						"type": "address"
					}
				],
				"name": "cancelContract",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "getAmountTransaction",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "getInfoGlobal",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					},
					{
						"internalType": "enum PayConsent.status",
						"name": "",
						"type": "uint8"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "_pers",
						"type": "address"
					}
				],
				"name": "getInfoOtherSide",
				"outputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "_pers",
						"type": "address"
					}
				],
				"name": "getInfoUser",
				"outputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					},
					{
						"internalType": "enum PayConsent.user_type",
						"name": "",
						"type": "uint8"
					},
					{
						"internalType": "enum PayConsent.status",
						"name": "",
						"type": "uint8"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "getStatusContract",
				"outputs": [
					{
						"internalType": "enum PayConsent.status",
						"name": "",
						"type": "uint8"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "_pers",
						"type": "address"
					}
				],
				"name": "payAndSign",
				"outputs": [],
				"stateMutability": "payable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "_pers",
						"type": "address"
					}
				],
				"name": "signContract",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "transactionAmount",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			}
		],
		params: [
			String(type_creator_user),
			String(type_other_user),
			String(creator_user),
			String(other_user),
			String(transactionAmount),
      [
		    String(urls[0]),
		    String(urls[1])
      ]
	],
	walletMethod: "kms",
	}
  )
  if (res.request.status  == 201){
	console.log(res.data.smartContract.address);
	return (res.data.smartContract.address);
  } 
  return ("");
}

function FormPage() {
	const [contractInfo, setContractInfo] = useState({
		dest: "",
		amount:"",
    	type_user:2,
	});
	const { address, isConnected } = useAccount();
	const navigate = useNavigate();
  	const urls = [];

  function handleChange(evt) {
		const value = evt.target.value;
		setContractInfo({
			...contractInfo,
			[evt.target.name]: value
		});
	}

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  const handleSubmission = () => {};

  const changeHandler = async (event) => {
    if (event.target.files[0] && event.target.files[1]) {
      urls[0] = uploadFiletoIpfs(event.target.files[0]);
      urls[1] = uploadFiletoIpfs(event.target.files[1]);
	  console.log(urls);
    }
  };

  console.log(urls);
  return (
    <>
      <div>
        <img src={Logo} alt="Logo" className="h-[30px] ml-[80px] mt-[30px]"/>
      </div>
      <div className="total-form">
        <form className="form-div-total" onSubmit={handleSubmit}>
          <div className="green-line"></div>
          <div className="form-div">
            <div className="form-div1">
              <div className="title-form">
                <h1>Create a contract</h1>
              </div>
              <div className="status-div">
                <div className="label-status">
                  <label className="status-title">
                    Status
                  </label>
                  <p className="text-[13px]">Seller or Buyer</p>
                </div>
                <div className="select-box-div">
                  <select className="select-box" onChange={handleChange} value={contractInfo.type_user} name="type_user">
                    <option value="2" disabled>
                      Status
                    </option>
                    <option value="0">Customer</option>
                    <option value="1">Service Provider</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-div2">
              <div className="status-div">
                <div className="label-status">
                  <label className="status-title">
                    My Wallet ID
                  </label>
                  <p className="text-[13px]">The creator of this contract</p>
                </div>
                <div className="select-box-div">
                  <div className="wallet-id-total">
                    <div className="wallet-id-section">
                      <div className="id-metamask-form">
                        <i className="fas fa-hashtag"></i>
                        <strong className="id-name">{address}</strong>
                        <i
                          style={{ cursor: "pointer", marginLeft: 2 }}
                          onClick={() => {
                            navigator.clipboard.writeText(address);
                          }}
                          className="far fa-clone"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="status-div">
                <div className="label-status">
                  <label className="status-title">
                    Subject
                  </label>
                  <p className="text-[13px]">About the contract</p>
                </div>
                <div className="select-box-div">
                  <textarea
                    className="select-box"
                    id="exampleFormControlTextarea13"
                    rows="3"
                    placeholder="Enter the subject of this contract"
                  ></textarea>
                </div>
              </div>
              <div className="status-div">
                <div className="label-status">
                  <label className="status-title">
                    Sending To
                  </label>
                  <p className="text-[13px]">The receiver's wallet adress</p>
                </div>
                <div className="select-box-div">
                  <input
                    className="select-box"
                    id="exampleInput8"
                    placeholder="0x659fc9b0e47d717f78..."
                    onChange={handleChange}
                    value={contractInfo.dest} name="dest"
                  />
                </div>
              </div>
              <div className="status-div-upload">
                <div className="label-status">
                  <label className="status-title">File To Upload</label>
                  <p className="text-[13px]">(Quotation, Specifications ...)</p>
                </div>
                <div>
                  <div className="upload-btn-wrapper">
                    <button className="btn" onClick={handleSubmission}>
                      {urls.length == 2 ? "Files Uploaded" : "Upload a file"}
                    </button>
                    <input
                      onChange={() => changeHandler(event)}
                      type="file"
                      name="myfile"
                      multiple
                    />
                  </div>
                </div>
              </div>

              <div className="status-div">
                <div className="label-status">
                  <label className="status-title">
                    Price
                  </label>
                </div>
                <div className="select-box-div-price">
                  <input
                    className="select-box-price"
                    type="price"
                    id="exampleInput8"
                    placeholder="Price"
                    onChange={handleChange}
                    value={contractInfo.amount} name="amount"
                  />
                  <p className="bnb-tag">MATIC</p>
                </div>
              </div>
            </div>
            <div className="form-div3">
              <div>
                <button className="text-[13px]" type="dismiss">
                  Dismiss
                </button>
              </div>
              <div>
                <button className="btn-connexion"
                onClick={async () => {
                  let res;
                  if (contractInfo.type_user == 0)
                    res = await deployContract(0, 1, ethereum.selectedAddress, contractInfo.dest, contractInfo.amount, urls);

                  else
                    res = await deployContract(1, 0, ethereum.selectedAddress, contractInfo.dest, contractInfo.amount, urls);
                  if (res != "")
					navigate("/summary/" + res);
                }}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormPage;