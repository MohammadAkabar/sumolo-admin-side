<script>
import { mapActions, mapWritableState } from 'pinia';
import { useAppStore } from '../stores/app';


export default {
    data() {
        return {
            rupiah: ''
        }
    },
    computed: {
        ...mapWritableState(useAppStore, ['assets'])
    },
    methods: {
        ...mapActions(useAppStore, ['fetchAssets', 'deleteVehicle']),
        rupiahFormat(price) {
            let reverse = price.toString().split('').reverse().join(''),
                ribuan = reverse.match(/\d{1,3}/g);
            ribuan = ribuan.join('.').split('').reverse().join('');
            this.rupiah = ribuan
            return this.rupiah
        }
    },

    async created() {
        this.fetchAssets();

    }

}

</script>
<template >
    <main id="main" class="main">
        <div class="container row gy-4">
            
                    <div v-for="(item, index) in assets" :key="index" class="col-xl-4 col-md-6">
                        <img :src="item.image" style="max-width: 300px;" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                                additional
                                content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>

          
        </div>


    </main>
</template>
<style ></style>