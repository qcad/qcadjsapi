

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef RACTIONADAPTER_H_BASE
  #define RACTIONADAPTER_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      
    #include <QQmlEngine>

    
        #include "RActionAdapter.h"
      
    // Base class for RActionAdapter
      class RActionAdapter_Base : public RActionAdapter {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: RActionAdapter
  // Function: 
  // Parameters: 1
  // preceding Parameters: -1
RActionAdapter_Base
        
      (

        
          RJSApi& _h
          
            ,
          RGuiAction* guiAction=NULL
      )
      
        : RActionAdapter(
          guiAction
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~RActionAdapter_Base() { }

    public:
      // set handler:
      //void setHandler(RJSApi* h) {
      //  handler = h;
      //}
    
      // protected overwritten functions / events and their public invokable counterparts:
      

      // public virtual overwritten functions / events:
      
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual bool isOverride(
      
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual bool isOverrideSup(
        
      )
      
      {
        
          return
        RActionAdapter::isOverride(
          
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual RDocument* getDocument(
      
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual RDocument* getDocumentSup(
        
      )
      
      {
        
          return
        RActionAdapter::getDocument(
          
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual RDocumentInterface* getDocumentInterface(
      
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual RDocumentInterface* getDocumentInterfaceSup(
        
      )
      
      {
        
          return
        RActionAdapter::getDocumentInterface(
          
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void setDocumentInterface(
      RDocumentInterface* di
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void setDocumentInterfaceSup(
        RDocumentInterface* di
      )
      
      {
        RActionAdapter::setDocumentInterface(
          di
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void beginEvent(
      
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void beginEventSup(
        
      )
      
      {
        RActionAdapter::beginEvent(
          
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void setGraphicsView(
      RGraphicsView* a1
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void setGraphicsViewSup(
        RGraphicsView* a1
      )
      
      {
        RActionAdapter::setGraphicsView(
          a1
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void finishEvent(
      
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void finishEventSup(
        
      )
      
      {
        RActionAdapter::finishEvent(
          
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void enterEvent(
      
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void enterEventSup(
        
      )
      
      {
        RActionAdapter::enterEvent(
          
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void suspendEvent(
      
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void suspendEventSup(
        
      )
      
      {
        RActionAdapter::suspendEvent(
          
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void resumeEvent(
      
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void resumeEventSup(
        
      )
      
      {
        RActionAdapter::resumeEvent(
          
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void escapeEvent(
      
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void escapeEventSup(
        
      )
      
      {
        RActionAdapter::escapeEvent(
          
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void keyPressEvent(
      QKeyEvent& a1
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void keyPressEventSup(
        QKeyEvent& a1
      )
      
      {
        RActionAdapter::keyPressEvent(
          a1
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void keyReleaseEvent(
      QKeyEvent& a1
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void keyReleaseEventSup(
        QKeyEvent& a1
      )
      
      {
        RActionAdapter::keyReleaseEvent(
          a1
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void mousePressEvent(
      RMouseEvent& a1
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void mousePressEventSup(
        RMouseEvent& a1
      )
      
      {
        RActionAdapter::mousePressEvent(
          a1
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void mouseMoveEvent(
      RMouseEvent& a1
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void mouseMoveEventSup(
        RMouseEvent& a1
      )
      
      {
        RActionAdapter::mouseMoveEvent(
          a1
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void mouseReleaseEvent(
      RMouseEvent& a1
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void mouseReleaseEventSup(
        RMouseEvent& a1
      )
      
      {
        RActionAdapter::mouseReleaseEvent(
          a1
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void mouseDoubleClickEvent(
      RMouseEvent& a1
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void mouseDoubleClickEventSup(
        RMouseEvent& a1
      )
      
      {
        RActionAdapter::mouseDoubleClickEvent(
          a1
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void wheelEvent(
      RWheelEvent& a1
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void wheelEventSup(
        RWheelEvent& a1
      )
      
      {
        RActionAdapter::wheelEvent(
          a1
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void tabletEvent(
      RTabletEvent& a1
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void tabletEventSup(
        RTabletEvent& a1
      )
      
      {
        RActionAdapter::tabletEvent(
          a1
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void swipeGestureEvent(
      QSwipeGesture& a1
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void swipeGestureEventSup(
        QSwipeGesture& a1
      )
      
      {
        RActionAdapter::swipeGestureEvent(
          a1
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void panGestureEvent(
      QPanGesture& a1
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void panGestureEventSup(
        QPanGesture& a1
      )
      
      {
        RActionAdapter::panGestureEvent(
          a1
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void pinchGestureEvent(
      QPinchGesture& a1
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void pinchGestureEventSup(
        QPinchGesture& a1
      )
      
      {
        RActionAdapter::pinchGestureEvent(
          a1
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void commandEvent(
      RCommandEvent& a1
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void commandEventSup(
        RCommandEvent& a1
      )
      
      {
        RActionAdapter::commandEvent(
          a1
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void commandEventPreview(
      RCommandEvent& a1
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void commandEventPreviewSup(
        RCommandEvent& a1
      )
      
      {
        RActionAdapter::commandEventPreview(
          a1
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void coordinateEvent(
      RCoordinateEvent& a1
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void coordinateEventSup(
        RCoordinateEvent& a1
      )
      
      {
        RActionAdapter::coordinateEvent(
          a1
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void coordinateEventPreview(
      RCoordinateEvent& a1
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void coordinateEventPreviewSup(
        RCoordinateEvent& a1
      )
      
      {
        RActionAdapter::coordinateEventPreview(
          a1
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void entityPickEvent(
      REntityPickEvent& a1
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void entityPickEventSup(
        REntityPickEvent& a1
      )
      
      {
        RActionAdapter::entityPickEvent(
          a1
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void entityPickEventPreview(
      REntityPickEvent& a1
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void entityPickEventPreviewSup(
        REntityPickEvent& a1
      )
      
      {
        RActionAdapter::entityPickEventPreview(
          a1
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void propertyChangeEvent(
      RPropertyEvent& a1
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void propertyChangeEventSup(
        RPropertyEvent& a1
      )
      
      {
        RActionAdapter::propertyChangeEvent(
          a1
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void zoomChangeEvent(
      RGraphicsView& a1
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void zoomChangeEventSup(
        RGraphicsView& a1
      )
      
      {
        RActionAdapter::zoomChangeEvent(
          a1
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void updatePreview(
      
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void updatePreviewSup(
        
      )
      
      {
        RActionAdapter::updatePreview(
          
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void applyOperation(
      
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void applyOperationSup(
        
      )
      
      {
        RActionAdapter::applyOperation(
          
        );
      }
    

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
  