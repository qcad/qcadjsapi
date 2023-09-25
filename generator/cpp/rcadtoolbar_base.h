

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef RCADTOOLBAR_H_BASE
  #define RCADTOOLBAR_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      
    #include <QQmlEngine>

    
        #include "RCadToolBar.h"
      
    // Base class for RCadToolBar
      class RCadToolBar_Base : public RCadToolBar {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: RCadToolBar
  // Function: 
  // Parameters: 2
  // preceding Parameters: -1
RCadToolBar_Base
        
      (

        
          RJSApi& _h
          
            ,
          const QString& title, QWidget* parent=0
      )
      
        : RCadToolBar(
          title, parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~RCadToolBar_Base() { }

    public:
      // set handler:
      //void setHandler(RJSApi* h) {
      //  handler = h;
      //}
    
      // protected overwritten functions / events and their public invokable counterparts:
      
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual void contextMenuEvent(
      QContextMenuEvent* event
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void contextMenuEventPublic(
      QContextMenuEvent* event
    ) {
      //qDebug() << "RCadToolBar_Base::contextMenuEventPublic()";
      RCadToolBar::contextMenuEvent(
        event
      );
    }
  

      // public virtual overwritten functions / events:
      

      // public pure-virtual functions:
      

    public:
      //void setRecFlag(bool on) {
      //  recFlag = on;
      //}

    public:
      QJSValue self;

    private:
      
        RJSApi& handler;
      
      //bool recFlag;

    };
    
  #endif
  