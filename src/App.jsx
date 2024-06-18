import { useState } from 'react'

const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbersList = "0123456789";
const symbolList = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

function App() {

  const [password, setPassword] = useState('P4$5W0rD!!@');
  const [upperCaseCheck, setUpperCaseCheck] = useState(false);
  const [lowerCaseCheck, setLowerCaseCheck] = useState( false);
  const [numberCheck, setNumberCheck] = useState(false);
  const [symbolCheck, setSymbolCheck] = useState(false);
  const [passwordLength, setPasswordLength] = useState(8);

  const generatePassword = () => {

        let characterList = '';

        if(upperCaseCheck){
          characterList += upperCaseLetters
        }
        if(lowerCaseCheck){
          characterList += lowerCaseLetters
        }
        if(numberCheck){
          characterList += numbersList
        }
        if(symbolCheck){
          characterList += symbolList
        }                  
        
        let keepPassword = '';
        const characterListLength = characterList.length;

        for(let i = 0; i < passwordLength; i++){
            const characterIndex = Math.round(Math.random() * characterListLength);
            keepPassword += characterList.charAt(characterIndex)
        }

        setPassword(keepPassword)

      let trueCount = 0;
      if (upperCaseCheck) trueCount++;
      if (lowerCaseCheck) trueCount++;
      if (numberCheck) trueCount++;
      if (symbolCheck) trueCount++;

      const passwordStrength = document.getElementById('passwordStrength');

      if (trueCount === 1 ) {
          passwordStrength.innerHTML = '<span class="flex items-center text-maindark">EASY</span>';
          passwordStrength.style.backgroundColor = '#BEF992';
      } else if (trueCount === 2 ) {
          passwordStrength.innerHTML = '<span class="flex items-center text-maindark">MEDIUM</span>';
          passwordStrength.style.backgroundColor = '#FFD717';
      } else if (trueCount === 3 ) {
          passwordStrength.innerHTML = '<span class="flex items-center text-mainlight">HARD</span>';
          passwordStrength.style.backgroundColor = '#F97300';
      } else if (trueCount === 4 ) {
          passwordStrength.innerHTML = '<span class="flex items-center text-mainlight">Strongest</span>';
          passwordStrength.style.backgroundColor = '#BE3144';
      } else {
          passwordStrength.innerHTML = '<span class="flex items-center"></span>';
          passwordStrength.style.backgroundColor = '';
      }

  }

  const copyPassword = () =>{
        navigator.clipboard.writeText(password);
  }

  return (
    <>
    <div className="screen-container">
      <div className="h-full w-full">
        <div className="mx-auto flex h-screen w-[1220px] max-w-full flex-col justify-center">
          <div className="mx-auto flex w-full max-w-[420px] flex-col">
            <div className="flex justify-center p-6">
              <h1 className="text-mainlight text-3xl font-thin">
                Passsword Generator
              </h1>
            </div>
            <div className="flex flex-col">
              <div className="bg-subdark flex items-center justify-between">
                <div className="relative p-3">
                  <h2 className="text-2xl text-grey"> {password} </h2>
                </div>
                <div className="relative flex items-center justify-end p-3">
                  <button
                    onClick={copyPassword}
                    className=" text-maindark flex items-center justify-center bg-maingreen hover:bg-subgreen font-medium text-sm px-4 py-2">
                    <img
                      className="h-5 w-5"
                      alt="COPY Generate Password"
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PHBhdGggZD0iTTQ1MS43ODMgMzM3LjU3NmgtMzIuNjMxdi0zMi42MzFoMzIuNjMxeiIgZmlsbD0iIzIyMjgzMSIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Ik00NTEuNzgzIDMwNC45NDZoLTMyLjYzMXYtMzIuNjMxaDMyLjYzMXpNNDUxLjc4MyAyNzIuMzE1aC0zMi42MzF2LTMyLjYzMWgzMi42MzF6IiBmaWxsPSIjMjIyODMxIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0iTTQ1MS43ODMgMjM5LjY4NWgtMzIuNjMxdi0zMi42MzFoMzIuNjMxek00NTEuNzgzIDIwNy4wNTRoLTMyLjYzMXYtMzIuNjMxaDMyLjYzMXoiIGZpbGw9IiMyMjI4MzEiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJNNDE5LjE1MyAxNzQuNDI0aC0zMi42MzF2LTMyLjYzMWgzMi42MzF6TTE5MC43MzkgMTA5LjE2MmgtMzIuNjMxVjc2LjUzMWgzMi42MzF6IiBmaWxsPSIjMjIyODMxIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0iTTIyMy4zNjkgMTA5LjE2MmgtMzIuNjMxVjc2LjUzMWgzMi42MzF6TTI1NiAxMDkuMTYyaC0zMi42MzFWNzYuNTMxSDI1NnpNMjIzLjM2OSA0MDIuODM4SDI1NnYzMi42MzFoLTMyLjYzMXoiIGZpbGw9IiMyMjI4MzEiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJNMTkwLjczOSA0MDIuODM4aDMyLjYzMXYzMi42MzFoLTMyLjYzMXpNMTU4LjEwOCA0MDIuODM4aDMyLjYzMXYzMi42MzFoLTMyLjYzMXoiIGZpbGw9IiMyMjI4MzEiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJNMTI1LjQ3OCA0MDIuODM4aDMyLjYzMXYzMi42MzFoLTMyLjYzMXpNMzIxLjI2MSA0MDIuODM4aDMyLjYzMXYzMi42MzFoLTMyLjYzMXoiIGZpbGw9IiMyMjI4MzEiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJNMjg4LjYzMSA0MDIuODM4aDMyLjYzMXYzMi42MzFoLTMyLjYzMXpNMzUzLjg5MiAxNDEuNzkzaDMyLjYzMXYzMi42MzFoLTMyLjYzMXpNMjU2IDQwMi44MzhoMzIuNjMxdjMyLjYzMUgyNTZ6TTEyNS40NzggNDM1LjQ2OEg5Mi44NDd2LTMyLjYzMWgzMi42MzF6TTkyLjg0NyA0MDIuODM3SDYwLjIxNnYtMzIuNjMxaDMyLjYzMXoiIGZpbGw9IiMyMjI4MzEiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJNOTIuODQ3IDM3MC4yMDdINjAuMjE2di0zMi42MzFoMzIuNjMxek05Mi44NDcgMzM3LjU3Nkg2MC4yMTZ2LTMyLjYzMWgzMi42MzF6IiBmaWxsPSIjMjIyODMxIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0iTTkyLjg0NyAzMDQuOTQ2SDYwLjIxNnYtMzIuNjMxaDMyLjYzMXpNOTIuODQ3IDI3Mi4zMTVINjAuMjE2di0zMi42MzFoMzIuNjMxeiIgZmlsbD0iIzIyMjgzMSIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Ik05Mi44NDcgMjM5LjY4NUg2MC4yMTZ2LTMyLjYzMWgzMi42MzF6TTkyLjg0NyAyMDcuMDU0SDYwLjIxNnYtMzIuNjMxaDMyLjYzMXpNMTkwLjczOSAzNzAuMjA3aC0zMi42MzF2LTMyLjYzMWgzMi42MzF6IiBmaWxsPSIjMjIyODMxIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0iTTIyMy4zNjkgMzcwLjIwN2gtMzIuNjMxdi0zMi42MzFoMzIuNjMxek0yNTYgMzcwLjIwN2gtMzIuNjMxdi0zMi42MzFIMjU2ek0yODguNjMxIDM3MC4yMDdIMjU2di0zMi42MzFoMzIuNjMxeiIgZmlsbD0iIzIyMjgzMSIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Ik0zMjEuMjYxIDM3MC4yMDdIMjg4LjYzdi0zMi42MzFoMzIuNjMxeiIgZmlsbD0iIzIyMjgzMSIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Ik0zNTMuODkyIDM3MC4yMDdoLTMyLjYzMXYtMzIuNjMxaDMyLjYzMXoiIGZpbGw9IiMyMjI4MzEiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJNMzg2LjUyMiAzNzAuMjA3aC0zMi42MzF2LTMyLjYzMWgzMi42MzF6IiBmaWxsPSIjMjIyODMxIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0iTTM4Ni41MjIgNDAyLjgzN2gtMzIuNjMxdi0zMi42MzFoMzIuNjMxek00MTkuMTUzIDM3MC4yMDdoLTMyLjYzMXYtMzIuNjMxaDMyLjYzMXpNMTU4LjEwOCAzMzcuNTc2aC0zMi42MzF2LTMyLjYzMWgzMi42MzF6IiBmaWxsPSIjMjIyODMxIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0iTTE1OC4xMDggMzA0Ljk0NmgtMzIuNjMxdi0zMi42MzFoMzIuNjMxek0xNTguMTA4IDI3Mi4zMTVoLTMyLjYzMXYtMzIuNjMxaDMyLjYzMXoiIGZpbGw9IiMyMjI4MzEiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJNMTU4LjEwOCAyMzkuNjg1aC0zMi42MzF2LTMyLjYzMWgzMi42MzF6TTE1OC4xMDggMjA3LjA1NGgtMzIuNjMxdi0zMi42MzFoMzIuNjMxeiIgZmlsbD0iIzIyMjgzMSIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Ik0xNTguMTA4IDE3NC40MjRoLTMyLjYzMXYtMzIuNjMxaDMyLjYzMXoiIGZpbGw9IiMyMjI4MzEiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJNMTI1LjQ3OCAxNzQuNDI0SDkyLjg0N3YtMzIuNjMxaDMyLjYzMXoiIGZpbGw9IiMyMjI4MzEiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJNMTU4LjEwOCAxNDEuNzk0aC0zMi42MzF2LTMyLjYzMWgzMi42MzF6TTI4OC42MzEgMTQxLjc5NEgyNTZ2LTMyLjYzMWgzMi42MzF6TTM1My44OTIgMTc0LjQyNGgtMzIuNjMxdi0zMi42MzFoMzIuNjMxeiIgZmlsbD0iIzIyMjgzMSIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Ik0zMjEuMjYxIDE3NC40MjRIMjg4LjYzdi0zMi42MzFoMzIuNjMxeiIgZmlsbD0iIzIyMjgzMSIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4="
                    />
                    COPY
                  </button>
                </div>
              </div>
            </div>
            <div className="mx-auto flex w-full max-w-[420px] flex-col bg-subdark m-4">
              <div className="flex flex-col justify-between m-4">
                <div className="flex flex-col pb-8">
                  <div className="flex justify-between items-center pb-3">
                    <h3 className="text-mainlight text-xl font-thin">
                      Character Length
                    </h3>
                    <h2 className="flex items-center text-maingreen text-2xl">
                      {passwordLength}
                    </h2>
                  </div>
                  <div className="flex">
                    <input
                      id="passwordLength"
                      type="range"
                      min="8"
                      max="20"
                      onChange={(event) => setPasswordLength(event.currentTarget.value)}
                      defaultValue={passwordLength}
                      className="w-full h-2 bg-maindark rounded-lg appearance-none cursor-pointer glow-1 accent-mainlight"
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-4 pb-6">
                  <div className="flex flex-row space-x-4 items-center">
                    <input
                      type="checkbox"
                      checked={upperCaseCheck}
                      onChange={() => setUpperCaseCheck(!upperCaseCheck)}
                      className="h-5 w-5 bg-subdark border-sublight border-solid border-box border-[3px]"
                    />
                    <p className="text-mainlight text-xl font-thin">
                      Include Uppercase Letters
                    </p>
                  </div>
                  <div className="flex flex-row space-x-4 items-center">
                    <input
                      type="checkbox"
                      checked={lowerCaseCheck}
                      onChange={() => setLowerCaseCheck(!lowerCaseCheck)}
                      className="h-5 w-5 bg-subdark border-sublight border-solid border-box border-[3px]"
                    />
                    <p className="text-mainlight text-xl font-thin">
                      Include Lowercase Letters
                    </p>
                  </div>
                  <div className="flex flex-row space-x-4 items-center">
                    <input
                      type="checkbox"
                      checked={numberCheck}
                      onChange={() => setNumberCheck(!numberCheck)}
                      className="h-5 w-5 bg-subdark border-sublight border-solid border-box border-[3px]"
                    />
                    <p className="text-mainlight text-xl font-thin">
                      Include Numbers
                    </p>
                  </div>
                  <div className="flex flex-row space-x-4 items-center">
                    <input
                      type="checkbox"
                      checked={symbolCheck}
                      onChange={() => setSymbolCheck(!symbolCheck)}
                      className="h-5 w-5 bg-subdark border-sublight border-solid border-box border-[3px]"
                    />
                    <p className="text-mainlight text-xl font-thin">
                      Include Symbols
                    </p>
                  </div>
                </div>
                <div className="bg-maindark mb-6">
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                      <h2 className="p-3 text-xl text-grey">STRENGTH</h2>
                      <div className="flex space-x-2 p-3">
                        <div
                          id="passwordStrength"
                          className="flex justify-center h-8 w-[100px] bg-maindark border-sublight border-solid border-box border-2"
                        >
                          <span className="flex items-center"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={generatePassword}
                  className="text-maindark w-full justify-center flex items-center bg-maingreen hover:bg-subgreen py-3 text-xl font-thin">
                  <span>GENERATE</span>
                  <img
                    alt="Generate"
                    className="h-6 w-6 ml-2"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMTAwMDAgMTAwMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIGZpbGw9IiMyMjI4MzEiIGQ9Ik05NjM1IDQ2NTBoLTcwMHYtNzAwaC03MDB2LTcwMGgtNzAwdi03MDBoLTcwMHYtNzAwaC03MDB2MTQwMGg3MDB2NzAwaDcwMHY3MDBIMzY1djcwMGg3MTcwdjcwMGgtNzAwdjcwMGgtNzAwdjE0MDBoNzAwdi03MDBoNzAwdi03MDBoNzAwdi03MDBoNzAwdi03MDBoNzAweiIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4="
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default App
