import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const HomePage = () => {
  const loggedIn = { firstName: "Jogo"}

  return (
    <section className='home'>
      <div className="home-content">
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subText="Access and manage your account and transaction effeciently."
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            titalCurrentBalance={1250}
          />
        </header>
      </div>
    </section>
  )
}

export default HomePage