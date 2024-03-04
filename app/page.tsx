import Main from "./main";

export default function Memorial() {
  return (
    <Main pageName="memorial" heading="Memorial" content = {
      <>
        <p className="italic">
          They shall not grow old as we who are left grow old<br/>
          Age shall not weary them, nor the years condemn<br/>
          At the going down of the sun and in the morning<br/>
          We will remember them.
        </p>
      </>
    }/>
  )
}
