"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[977],{69852:function(t,e,i){i.d(e,{iO:function(){return n}});let n={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe",batchFetchMessages:"waku_batchFetchMessages"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe",batchFetchMessages:"irn_batchFetchMessages"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe",batchFetchMessages:"iridium_batchFetchMessages"}}},58851:function(t,e,i){i.d(e,{SIWEController:function(){return o},getDidAddress:function(){return s.NmC},getDidChainId:function(){return s.ZzI}});var n=i(44872);i(15314);var s=i(79182),r=i(49393),a=i(38016);let c=(0,a.sj)({status:"uninitialized"}),o={state:c,subscribeKey:(t,e)=>(0,r.VW)(c,t,e),subscribe:t=>(0,a.Ld)(c,()=>t(c)),_getClient(){if(!c._client)throw Error("SIWEController client not set");return c._client},async getNonce(t){let e=this._getClient(),i=await e.getNonce(t);return this.setNonce(i),i},async getSession(){try{let t=this._getClient(),e=await t.getSession();return e&&(this.setSession(e),this.setStatus("success")),e}catch{return}},createMessage(t){let e=this._getClient().createMessage(t);return this.setMessage(e),e},async verifyMessage(t){let e=this._getClient();return await e.verifyMessage(t)},async signIn(){let t=this._getClient();return await t.signIn()},async signOut(){let t=this._getClient();await t.signOut(),this.setStatus("ready"),this.setSession(void 0),t.onSignOut?.()},onSignIn(t){let e=this._getClient();e.onSignIn?.(t)},onSignOut(){let t=this._getClient();t.onSignOut?.()},setSIWEClient(t){c._client=(0,a.iH)(t),c.status="ready",n.OptionsController.setIsSiweEnabled(t.options.enabled)},setNonce(t){c.nonce=t},setStatus(t){c.status=t},setMessage(t){c.message=t},setSession(t){c.session=t,c.status=t?"success":"ready"}};var u=i(59276),l=i(93062),b=(0,l.iv)`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;let h=class extends l.oi{constructor(){super(...arguments),this.dappImageUrl=n.OptionsController.state.metadata?.icons,this.walletImageUrl=n.AccountController.state.connectedWalletInfo?.icon}firstUpdated(){let t=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");t?.[0]&&this.createAnimation(t[0],"translate(18px)"),t?.[1]&&this.createAnimation(t[1],"translate(-18px)")}render(){return(0,l.dy)`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(t,e){t.animate([{transform:"translateX(0px)"},{transform:e}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};h.styles=b,h=function(t,e,i,n){var s,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(a=(r<3?s(a):r>3?s(e,i,a):s(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a}([(0,u.customElement)("w3m-connecting-siwe")],h);var g=i(29347),d=i(14906),p=function(t,e,i,n){var s,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(a=(r<3?s(a):r>3?s(e,i,a):s(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let w=class extends l.oi{constructor(){super(...arguments),this.dappName=n.OptionsController.state.metadata?.name,this.isSigning=!1,this.isCancelling=!1}render(){return this.onRender(),(0,l.dy)`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}onRender(){o.state.session&&n.IN.close()}async onSign(){this.isSigning=!0,n.Xs.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track",properties:{network:n.fB.state.caipNetwork?.id||"",isSmartAccount:n.AccountController.state.preferredAccountType===d.y_.ACCOUNT_TYPES.SMART_ACCOUNT}});try{o.setStatus("loading");let t=await o.signIn();return o.setStatus("success"),n.Xs.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track",properties:{network:n.fB.state.caipNetwork?.id||"",isSmartAccount:n.AccountController.state.preferredAccountType===d.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),t}catch(e){let t=n.AccountController.state.preferredAccountType===d.y_.ACCOUNT_TYPES.SMART_ACCOUNT;return t?n.SnackController.showError("This application might not support Smart Accounts"):n.SnackController.showError("Signature declined"),o.setStatus("error"),n.Xs.sendEvent({event:"SIWE_AUTH_ERROR",type:"track",properties:{network:n.fB.state.caipNetwork?.id||"",isSmartAccount:t}})}finally{this.isSigning=!1}}async onCancel(){this.isCancelling=!0,n.AccountController.state.isConnected?(await n.ConnectionController.disconnect(),n.IN.close()):n.RouterController.push("Connect"),this.isCancelling=!1,n.Xs.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track",properties:{network:n.fB.state.caipNetwork?.id||"",isSmartAccount:n.AccountController.state.preferredAccountType===d.y_.ACCOUNT_TYPES.SMART_ACCOUNT}})}};p([(0,g.SB)()],w.prototype,"isSigning",void 0),p([(0,g.SB)()],w.prototype,"isCancelling",void 0),p([(0,u.customElement)("w3m-connecting-siwe-view")],w)}}]);