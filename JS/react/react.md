# 一、React 部分

新建文件夹，在这个新建的文件夹下，输入 `create-react-app 文件名` 即可快速创建一个 react app

## 1. React

React 通过引入虚拟 DOM，单向数据流，状态等设计理念，形成以组件为核心，用组件来搭建页面的开发模式，将服务器端的动态数据，用户在页面的交互和 UI 映射到一起。
React 具有以下特点：
- 声明式的视图层：React 采用的是 JSX 语法来声明视图层，这样就可以在视图层中随意的使用各种状态的数据。
- 视图层的更新流程更简单了，我们只要修改状态，组件就会根据不同的状态重新渲染到界面。
- 编写的 UI 组件可以实现复用
- 高效的 DOM 操作。React 采用虚拟 DOM 的设计方式，减少了对真实 DOM 的操作，效率得到了巨大的提升。

## 2. react 如何修改状态？






## 3. 什么是virtual dom     

虚拟DOM是普通的JavaScript对象，访问JavaScript对象当然比访问真实DOM要快得多。
用JavaScript 对象结构表示 DOM 树的结构；然后用这个虚拟 DOM 树构建一个真正的 DOM 树，插到文档当中。 当状态变更的时候，重新构造一棵新的虚拟 DOM 树。然后用新的树和旧的树进行比较，记录两棵树差异 把所记录的差异应用到所构建的真正的DOM树上，视图就更新了。Virtual DOM 本质上就是在 JS 和 DOM 之间做了一个缓存。

## 4.babel

Babel是一个JavaScript编译器，它可以
将ES 6及其以后的语法编译成ES 5的语法，从而让我们可以在开发过程
中尽情使用最新的JavaScript语法，而不需要担心代码无法在浏览器端运
行的问题。

## 5. 兄弟组件常见通信方式有哪些？ react 的数据流？

- react 原生实现方法
父组件向子组件通信是通过父组件向子组件的props传递数据完成的。父组件可以通过子组件的props传递给子组件一个回调函数，子组件在需要改变父组件数据时，调用这个回调函数即可。  
兄弟组件不能直接相互传送数据，需要通过状态提升的方式实现兄
弟组件的通信，即把组件之间需要共享的状态保存到距离它们最近的共
同父组件内，任意一个兄弟组件都可以通过父组件传递的回调函数来修
改共享状态，父组件中共享状态的变化也会通过props向下传递给所有
兄弟组件，从而完成兄弟组件之间的通信。

- 用 redux 做数据管理



## 6. props 和 state

- props 用于子组件接收通过父组件传递过来的属性和方法。
- state 是组件内部的状态，通过改变 state，来驱动组件发生变化，重新渲染界面。

## 7. 有状态组件和无状态组件

state 用来反映组件内部的状态变化，如果组件内部的状态时不变的，就用不到 state，属于无状态组件。反之，如果组件内部的状态会发生变化，需要用 state 来保存，就是有状态组件。

## 8.生命周期函数
     
只有状态组件才有生命周期函数，非状态组件没有生命周期函数。
   
组件的生命周期分为三个阶段：挂载阶段，更新阶段和卸载阶段。 

- 挂载阶段的生命周期函数：
    
    - compnentWillMount：在组件被挂载到 DOM 前被调用，只会被调用一次，实际中很少用到，因为在在这个方法进行的工作都可以提前到 constructor 中。在这里调用 this.setState 不会引起组件的重新渲染。
    
    - render 函数是定义一个组件必须要用的生命周期函数。render 是一个纯函数，在这里不能进行任何有副作用的操作，因此在这里不能调用 setState 方法。（render 并不负责组件的实际渲染工作，他只是返回一个 UI 的描述，真正的渲染工作是 React 自身负责）
    
    - componentDidMount：在组件被挂载到 DOM 后被调用，整个生命周期只被调用一次。这个时候可以获得 DOM 结构，依赖 DOM 节点的操作可以放到这个方法中。这个方法通常还用于向服务器端请求数据，在这里调用 setState 会驱动组件更新。
    
- 更新阶段的生命周期函数：   
组件被挂载到 DOM 后，组件的 props 和 state 会驱动组件的更新。props 驱动组件更新的实质是父组件的更新有可能会导致传入子组件的数据发生变化，导致子组件的更新。

    - componentWillReceiveProps：这个方法只有在 props 引起的组件更新过程中才会被调用，state 引起的组件更新不会调用这个方法。这个方法的参数 nextProps 是父组件传递过来的新的 props。由于父组件 render 方法的调用不一定能保证传递给子组件的数据发生变化，也就是说 nextProps 的值和当前组件的 props 的值可能相等，也可能不相等。因此需要比较新旧 props 是否相等来决定是否要重新渲染组件。
    
    - shouldComponentUpdate（nextProps, nextState）：通过比较 nextProps, nextState 和当前组件中的 props state 是否相同来决定是否执行更新过程，方法返回 true，就更新，返回 false 就不更新。这是组件渲染的优化操作，可以减少组建不必要的渲染，从而优化组建的性能。
    
    - componentWillUpdate（nextProps，nextState）：这个方法在组件render调用前执行。shouldComponentUpdate 和 componentWillUpdate 不能调用 setState，会引起循环渲染的问题。
    
    - componentDidUpdate（prevProps，prevState）：组件更新后被调用，可以作为操作更新后的DOM的地方。
    
- 卸载阶段

卸载阶段只有一个生命周期函数被调用，componnentWillUnmount。这个方法在组件被卸载前调用，可以在这里执行一些清理工作，比如清除组件中使用的定时器，清除componentDidMount中手动创建的DOM元素等，以避免引起内存泄漏。   
     
## 9. 受控组件和非受控组件

- 受控组件：如果一个表单元素的值是收 react 管理的，就是受控组件。受控组件能够保证组件界面的所有元素的状态都只有唯一的来源，都来源于 state。具体做法：监听表单元素的 onchange 事件，一旦触发这个事件，就收集表单元素的数据，更新到 state 中，由 state 统一管理数据。

- 非受控组件：表单元素的状态由表单元素自己管理。我们可以通过为表单元素定义ref属性获取元素的值。非受控组件看似简化了操作表单元素的过程，但这种方式破坏了React对组件状态管理的一致性，往往容易出现不容易排查的问题。

## 10. setState 的运行机制

setState 更新 state 是一个异步操作。react 会将多个 setState 操作合并，再更新 state。所以尽量不要依赖当前的 state 来计算下一个 state。同样也不能依赖当前的 props 计算下一个 props，因为 props 的更新也是异步。  
  
不要使用push、pop、shift、unshift、splice等方法修改数组
类型的状态，因为这些方法都是在原数组的基础上修改的，而concat、
slice、filter会返回一个新的数组。
   
## 11. react 新特性   

 - hooks
 react 16.8 版本中新增加了 hooks。hooks 可以在函数组件中标记状态，使用生命周期函数。
 
    - 出现 hooks 的原因，也就是之前状态组件的缺点：  
    状态逻辑难以复用；趋向复杂，难以维护；this 指向困扰
    
    - hooks 的优势：  
        
        - 函数组件没有了 this 指向问题
        - 自定义 hook 方便复用状态逻辑
    
    - 常用的 hooks
    
        - useState：
            - 必须按照固定的顺序和数量被调用。
            - 可以传入一个函数来延迟初始化。
            
        - Effect hooks：   
        数据获取，设置订阅，手动的更改 DOM，都可以称为副作用，可以将副作用分为两种，一种是需要清理的，另外一种是不需要清理的。比如网络请求，DOM 更改，日志这些副作用都不要清理。而比如定时器，事件监听则需要清理。之前我们处理这些需求是在生命周期函数中进行调用，现在统一用 useEffect。useEffect 是在组件 render 函数之后调用。

# 二、Redux 部分

## 1. 三大原则

- 唯一数据源   
Redux应用只维护一个全局的状态对象，存储在Redux的store中。唯一数据源是一种集中式管理应用状态的方式，便于监控任意时刻应用的状态和调试应用，减少出错的可能性。

- 保持应用状态只读  
在任何时候都不能直接修改应用状态。当需要修改应用状态时，必须发送一个action，由这个action描述如何修改应用状态。这一看似烦琐的修改状态的方式实际上是Redux状态管理流程的核心，保证了在大型复杂应用中状态管理的有序进行。

- 应用状态的改变通过纯函数完成   
action表明修改应用状态的意图，真正对应用状态做修改的是reducer。reducer必须是纯函数，所reducer在接收到action时，不能直接修改原来的状态对象，而是要创建一个新的状态对象 返回。


## 2. Redux 运行流程

- 当用户触摸界面时，调用store.dispatch(action)捕捉具体的action动作。  

- 然后Redux的store自动调用reducer函数，store传递两个参数给reducer函数：当前state和收到的action。其中，reducer函数必须是一个纯函数，该函数会返回一个新的state。   

- 根reducer会把多个子reducer的返回结果合并成最终的应用状态，在这一过程中，可以使用Redux提供的combineReducers方法。使用combineReducers方法时，action会传递给每个子的reducer进行处理，在子reducer处理后会将结果返回给根reducer合并成最终的应用状态。    

- store调用store.subscribe(listener)监听state的变化，state一旦发生改变就会触发store的更新，最终view会根据store数据的更新刷新界面。

### 延伸：redux store 对象的改变，具体是怎么让页面发生变化的？

# react-redux

### react-redux 运行的流程   

Provider 其实就只是一个外层容器，它的作用就是通过配合 connect 来达到跨层级传递数据。使用时只需将Provider定义为整个项目最外层的组件，并设置好store。那么整个项目都可以直接获取这个store。它的原理其实是通过React中的[Context]()来实现的  

connect 的作用是连接React组件与 Redux store，它包在我们的容器组件的外一层，它接收上面 Provider 提供的 store 里面的 state 和 dispatch，传给一个构造函数，返回一个对象，以属性形式传给我们的容器组件。

它共有四个参数mapStateToProps, mapDispatchToProps, mergeProps以及options。

mapStateToProps 的作用是将store里的state（数据源）绑定到指定组件的props中
mapDispatchToProps 的作用是将store里的action（操作数据的方法）绑定到指定组件的props中 


# 三、react-router   


1. BrowserRouter

   - react-router的核心组件<BrowserRouter>使用了HTML5 提供的 history API (pushState, replaceState 和 popstate 事件) 来保持 UI 和 URL 的同步。
   - path中不带#，以/开头。
   - Router会创建一个history对象，history用来跟踪URL，当URL发生变化时，Router的后代组件会重新渲染。React Router中提供的其他组件可以通过context获取history对象，这也隐含说明了React Router中的其他组件必须作为Router组件的后代组件使用。但Router中只能有唯一的一个子元素。  
   
2. HashRouter  

   - 使用 URL 的 hash 部分（即 window.location.hash）来保持 UI 和 URL 的同步。
   - path中以#开头。   
   
3. 路由组件的props对象会有新增加三个属性：location、match和history。这个三个属性用来获取path、查询参数、修改地址栏中的url等。
     
4. withRouter()   

   - 将非路由组件包装成路由组件。应用场景是：一些非路由，但是还需要使用路由组件的一些属性，如location、match。所以使用这个函数将非路由组件包装为路由组件。

### 2. 你使用的是哪个路由组件，为什么？
- 我使用的是HashRouter。
- 原因是：
  - BrowserRouter使用的是HTML5的hisotry API，我们进行路由切换时，浏览器会向服务器发送请求。而我们所做的是单页应用，路由切换时不需要向服务器发送请求。
  - 使用HashRouter就可以避免这个问题。浏览器会向服务器发送请求。而我们所做的是单页应用，路由切换时不需要向服务器发送请求。
- 详细说明两个路由的区别：[react-router v4中 HashRouter 和 BrowserRouter的使用](https://www.cnblogs.com/sunLemon/p/9020153.html)


# 四、单页应用     
    
### 1. 对单页应用的理解   

- 单页应用会请求一个html页面。切换到其他组件，路径也相应变化，但是没有新的html文件请求，而页面的内容也变化率。
- 简单的说，在不发送请求的情况下，实现页面的切换。
- 原理：同js感知url的变化，获取当前的path，根据path，切换不同的路由组件。然后渲染显示。     

### 2. 单页应用的优缺点     

- 优点
  1. 良好的用户体验
  用户不需要重新刷新页面，获取数据也是通过Ajax异步获取，页面显示流畅。在移动端也表现很好。
  2. 良好的前后端工作分离模式  
  单页Web应用可以和RESTful规约一起使用，通过REST API提供接口数据，并使用Ajax异步获取，这样有助于分离客户端和服务器端工作。更进一步，可以在客户端也可以分解为静态页面和页面交互两个部分。
  3. 减轻服务器压力  
  服务器只用出数据就可以，不用管展示逻辑和页面合成，吞吐能力会提高几倍
  4. 共同使用套前后端一代码  
  不用修改后端程序代码就可以同时用于Web界面、手机、平板等多种客户端    
  
- 缺点   

  1. 首屏时间慢
  2. SEO差
  3. 前进、后退管理     
  
### 3. 怎样解决单页应用SEO差的问题    

- 使用服务端渲染可以解决单页应用SEO差的问题。   

### 4. 服务端渲染和客户端渲染    

- 服务端渲染  
  服务端渲染的模式下，当用户第一次请求页面时，由服务器把需要的组件或页面渲染成 HTML 字符串，然后把它返回给客户端。客户端拿到手的，是可以直接渲染然后呈现给用户的 HTML 内容，不需要为了生成 DOM 内容自己再去跑一遍 JS 代码。使用服务端渲染的网站，可以说是“所见即所得”，页面上呈现的内容，我们在 html 源文件里也能找到。  
  
- 服务端渲染优缺点   

  - 优点  
  首屏渲染快、利于SEO、可以生成缓存片段，生成静态化文件、节能（对比客户端渲染的耗电）
  - 缺点  
  用户体验较差、不容易维护，通常前端改了部分html或者css，后端也需要修改。   
  
- 客户端渲染      

服务端把渲染的静态文件给到客户端，客户端拿到服务端发送过来的文件自己跑一遍js，根据JS运行结果，生成相应DOM，然后渲染给用户。   

- 客户端渲染的优缺点    

  - 优点  
  网络传输数据量小、减少了服务器压力、前后端分离、局部刷新，无需每次请求完整页面、交互好可实现各种效果。
  - 缺点  
  不利于SEO、爬虫看不到完整的程序源码、首屏渲染慢（渲染前需要下载一堆js和css等）。 