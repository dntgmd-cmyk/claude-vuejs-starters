<script setup>
import { PRICING_PLANS } from '@/lib/constants'
import SectionHeader from '@/components/common/SectionHeader.vue'
import PricingCard from '@/components/common/PricingCard.vue'
import { Badge } from '@/components/ui/badge'
</script>

<template>
  <div>
    <section class="py-20 sm:py-28">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" class="mb-4">Pricing</Badge>
          <SectionHeader
            title="심플한 가격 정책"
            description="프로젝트 규모에 맞는 플랜을 선택하세요."
            centered
          />
        </div>

        <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <PricingCard
            v-for="plan in PRICING_PLANS"
            :key="plan.name"
            :plan="plan"
          />
        </div>

        <p class="mt-10 text-center text-sm text-muted-foreground">
          모든 플랜은 무료 체험 기간을 포함합니다. 신용카드 등록 불필요.
        </p>
      </div>
    </section>
  </div>
</template>
