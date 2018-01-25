<?php

namespace Drupal\jstemp\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Class AssetsController.
 */
class AssetsController extends ControllerBase {

  /**
   * load.
   *
   * @return string
   *   Return Rest string.
   */
  public function load($name) {
    $theme = array('#markup' => '<div class="wrapper"><div id="btn1" class="button11">Load Rest</div><br>
    <div id="rest-table" class="rest-table">Loading...my rest</div><br></div>',
      '#attached' => array(
        'library' => array(
          'jdrupal/jdrupal',
          'jstemp/jsapp'
        )
      )
    );
    return $theme;
  }

}
