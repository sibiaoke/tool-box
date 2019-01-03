import Vue from 'vue';
import VueEventhub from '../src/index';

Vue.use(VueEventhub);

test('Vue.eventhub', () => {
  const vm = new Vue({
    data() {
      return { count: 0 };
    },
    created() {
      this.$eventHub.on('add', num => {
        this.count += num;
      });
      this.$eventHub.once('addOnce', num => {
        this.count += num;
      });
    },
    methods: {
      clean() {
        this.$eventHub.off('add');
      }
    }
  });

  const obj = {
    fire() {
      Vue.eventHub.emit('add', 1);
    },
    fireOnce() {
      Vue.eventHub.emit('addOnce', 1);
    }
  };

  obj.fire();
  expect(vm.count).toBe(1);

  obj.fire();
  expect(vm.count).toBe(2);

  vm.clean();
  obj.fire();
  expect(vm.count).toBe(2);

  obj.fireOnce();
  expect(vm.count).toBe(3);

  obj.fireOnce();
  expect(vm.count).toBe(3);
});

test('this.$eventHub', () => {
  const vm1 = new Vue({
    data() {
      return { count: 0 };
    },
    created() {
      this.$eventHub.on('add', num => {
        this.count += num;
      });
      this.$eventHub.once('addOnce', num => {
        this.count += num;
      });
    },
    methods: {
      clean() {
        this.$eventHub.off('add');
      }
    }
  });

  const vm2 = new Vue({
    methods: {
      fire() {
        this.$eventHub.emit('add', 1);
      },
      fireOnce() {
        this.$eventHub.emit('addOnce', 1);
      }
    }
  });

  vm2.fire();
  expect(vm1.count).toBe(1);

  vm2.fire();
  expect(vm1.count).toBe(2);

  vm1.clean();
  vm2.fire();
  expect(vm1.count).toBe(2);

  vm2.fireOnce();
  expect(vm1.count).toBe(3);

  vm2.fireOnce();
  expect(vm1.count).toBe(3);
});
